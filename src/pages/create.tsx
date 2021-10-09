import { FormikProvider } from 'formik'
import { navigate, PageProps } from 'gatsby'
import React from 'react'
import FormTitle from '../components/formTitle'
import GoBack from '../components/goBack'
import InvoiceForm from '../components/invoiceForm'
import Layout from '../components/layout'
import useInvoiceForm from '../hooks/useInvoiceForm'

const CreatePage: React.FC<PageProps> = () => {
  const form = useInvoiceForm({
    mode: 'create',
    onSuccess: () => navigate('/invoices/'),
  })

  return (
    <Layout>
      <div>
        <GoBack to="/invoices/" />
        <FormTitle text="New Invoice" />
        <FormikProvider value={form}>
          <InvoiceForm mode="create" />
        </FormikProvider>
      </div>
    </Layout>
  )
}

export default CreatePage
