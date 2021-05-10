import styled from '@emotion/styled'
import { FormikProvider } from 'formik'
import { useEffect, useRef, useState } from 'react'
import { useModalContext } from '../context/modalContext'
import useInvoiceForm from '../hooks/useInvoiceForm'
import useScrollBottom from '../hooks/useScrollBottom'
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

const NewInvoiceDrawer = () => {
  const form = useInvoiceForm()
  const { hideModal } = useModalContext()
  const formContainerRef = useRef<HTMLDivElement>(null)
  const scrollBottom = useScrollBottom({ ref: formContainerRef })

  return (
    <Drawer>
      <StyledFormContainer ref={formContainerRef}>
        <FormTitle text="New Invoice" />
        <FormikProvider value={form}>
          <InvoiceForm mode="create" />
        </FormikProvider>
      </StyledFormContainer>
      <ActionsFooter
        showShadow={scrollBottom}
        actions={[
          {
            buttonVariant: 'secondary',
            text: 'Discard',
            onClick: hideModal,
            toLeft: true,
          },
          { buttonVariant: 'dark', text: 'Save as Draft' },
          { buttonVariant: 'primary', text: 'Save & Send' },
        ]}
      />
    </Drawer>
  )
}

export default NewInvoiceDrawer
