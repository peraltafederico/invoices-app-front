import styled from '@emotion/styled'
import { FormikProvider } from 'formik'
import { useRef } from 'react'
import { useModalContext } from '../context/modalContext'
import useInvoiceForm from '../hooks/useInvoiceForm'
import useScrollBottom from '../hooks/useScrollBottom'
import { InvoiceFormMode } from '../interfaces'
import ActionsFooter from './actionsFooter'
import Drawer from './drawer'
import FormTitle from './formTitle'
import InvoiceForm from './invoiceForm'

const StyledFormContainer = styled.div`
  max-height: calc(100% - 5.9rem);
  overflow: auto;
  padding: ${(props) =>
    `${props.theme.space[12]} ${props.theme.space[12]} 0 ${props.theme.space[12]}`};
`

interface Props {
  mode: InvoiceFormMode
}

const InvoiceDrawer: React.FC<Props> = ({ mode }) => {
  const form = useInvoiceForm({ mode })
  const { hideModal } = useModalContext()
  const formContainerRef = useRef<HTMLDivElement>(null)
  const scrollBottom = useScrollBottom({ ref: formContainerRef })

  const submit = () => {
    form.handleSubmit()
    hideModal()
  }

  const actions = {
    edit: [
      {
        buttonVariant: 'secondary',
        text: 'Cancel',
        onClick: hideModal,
      },
      {
        buttonVariant: 'primary',
        text: 'Save Changes',
        onClick: form.handleSubmit,
      },
    ],
    create: [
      {
        buttonVariant: 'secondary',
        text: 'Discard',
        onClick: hideModal,
        toLeft: true,
      },
      {
        buttonVariant: 'dark',
        text: 'Save as Draft',
        onClick: async () => {
          await form.setFieldValue('status', 'draft')
          submit()
        },
      },
      {
        buttonVariant: 'primary',
        text: 'Save & Send',
        onClick: submit,
      },
    ],
  }

  return (
    <Drawer>
      <StyledFormContainer ref={formContainerRef}>
        <FormTitle text={mode === 'edit' ? 'Edit #XM9141' : 'New Invoice'} />
        <FormikProvider value={form}>
          <InvoiceForm mode={mode} />
        </FormikProvider>
      </StyledFormContainer>
      <ActionsFooter
        showShadow={scrollBottom}
        actions={
          actions[mode] as React.ComponentProps<typeof ActionsFooter>['actions']
        }
      />
    </Drawer>
  )
}

export default InvoiceDrawer
