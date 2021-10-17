import { FormikProvider } from 'formik'
import { navigate, PageProps } from 'gatsby'
import React from 'react'
import FormTitle from '../components/formTitle'
import GoBack from '../components/goBack'
import InvoiceForm from '../components/invoiceForm'
import Layout from '../components/layout'
import { usePageContext } from '../context/pageContext'
import useInvoiceForm from '../hooks/useInvoiceForm'
import { Invoice } from '../interfaces'

const Edit: React.FC<PageProps> = () => {
  const {
    pageContext: { bussinessId },
  } = usePageContext<Invoice>()
  const goBackUrl = `/invoices/${bussinessId}/`

  const form = useInvoiceForm({
    mode: 'edit',
    onSuccess: () => navigate(goBackUrl),
  })

  return (
    <Layout
      description="Edit an invoice and test the power of this app."
      title="Edit"
    >
      <div>
        <GoBack to={goBackUrl} />
        <FormTitle text={`Edit #${bussinessId}`} />
        <FormikProvider value={form}>
          <InvoiceForm mode="edit" />
        </FormikProvider>
      </div>
    </Layout>
  )
}

export default Edit
