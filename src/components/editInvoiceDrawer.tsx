import styled from '@emotion/styled'
import { FormikProvider } from 'formik'
import { useEffect, useRef, useState } from 'react'
import { useModalContext } from '../context/modalContext'
import useInvoiceForm from '../hooks/useInvoiceForm'
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

const EditInvoiceDrawer = () => {
  const form = useInvoiceForm()
  const { hideModal } = useModalContext()
  const formContainerRef = useRef<HTMLDivElement>(null)
  const [showShadow, setShowShadow] = useState(true)

  useEffect(() => {
    const node = formContainerRef.current

    const handleScroll = () => {
      const scrollBottom =
        (node?.scrollTop || 0) + (node?.offsetHeight || 0) ===
        node?.scrollHeight
      if (scrollBottom) {
        setShowShadow(false)
      } else {
        setShowShadow(true)
      }
    }

    node?.addEventListener('scroll', handleScroll)

    return () => node?.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Drawer>
      <StyledFormContainer ref={formContainerRef}>
        <FormTitle text="Edit #XM9141" />
        <FormikProvider value={form}>
          <InvoiceForm mode="edit" />
        </FormikProvider>
      </StyledFormContainer>
      <ActionsFooter
        showShadow={showShadow}
        actions={[
          {
            buttonVariant: 'secondary',
            text: 'Cancel',
            onClick: hideModal,
          },
          { buttonVariant: 'primary', text: 'Save Changes' },
        ]}
      />
    </Drawer>
  )
}

export default EditInvoiceDrawer
