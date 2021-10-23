import styled from '@emotion/styled'
import { Form, useFormikContext } from 'formik'
import { navigate } from 'gatsby'
import { useEffect, useRef, useState } from 'react'
import { usePageContext } from '../../context/pageContext'
import useScrollBottom from '../../hooks/useScrollBottom'
import { Invoice, InvoiceFormMode } from '../../interfaces'
import { MIN_TABLET_MEDIA_QUERY } from '../../theme/base'
import ActionsFooter from '../actionsFooter'
import BillFrom from './billFrom'
import BillTo from './billTo'
import FormErrors from './formErrors'
import ItemList from './itemList'

const StyledForm = styled(Form)`
  margin-bottom: 7.4rem;

  ${MIN_TABLET_MEDIA_QUERY} {
    margin-bottom: 2.5rem;
  }
`

const StyledCreateFooter = styled(ActionsFooter)`
  & button {
    padding: 1.4rem;
  }
`

interface Props {
  mode: InvoiceFormMode
}

const InvoiceForm: React.FC<Props> = ({ mode }) => {
  const form = useFormikContext()
  const {
    pageContext: { bussinessId },
  } = usePageContext<Invoice>()
  const formContainerRef = useRef<HTMLFormElement>(null)
  const [ref, setRef] = useState<{ current: HTMLElement | null }>({
    current: null,
  })

  useEffect(() => {
    setRef({ current: document.documentElement })
  }, [])

  const scrollBottom = useScrollBottom({
    ref,
    isListeningRoot: true,
  })

  return (
    <StyledForm ref={formContainerRef}>
      <BillFrom />
      <BillTo mode={mode} />
      <ItemList />
      <FormErrors />
      {
        {
          create: (
            <StyledCreateFooter
              showShadow={scrollBottom}
              actions={[
                {
                  buttonVariant: 'secondary',
                  text: 'Discard',
                  onClick: () => navigate(`/invoices/`),
                },
                {
                  buttonVariant: 'dark',
                  text: 'Save as Draft',
                  onClick: async () => {
                    form.setFieldValue('status', 'draft')
                    form.handleSubmit()
                  },
                },
                {
                  buttonVariant: 'primary',
                  text: 'Save & Send',
                  onClick: form.handleSubmit,
                },
              ]}
            />
          ),
          edit: (
            <ActionsFooter
              showShadow={scrollBottom}
              actions={[
                {
                  buttonVariant: 'secondary',
                  text: 'Cancel',
                  onClick: () => navigate(`/invoices/${bussinessId}/`),
                },
                {
                  buttonVariant: 'primary',
                  text: 'Save Changes',
                  onClick: form.handleSubmit,
                },
              ]}
            />
          ),
        }[mode]
      }
    </StyledForm>
  )
}

export default InvoiceForm
