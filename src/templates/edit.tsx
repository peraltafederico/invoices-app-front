import { FormikProvider } from 'formik'
import { PageProps } from 'gatsby'
import React from 'react'
import FormTitle from '../components/formTitle'
import GoBack from '../components/goBack'
import InvoiceForm from '../components/invoiceForm'
import Layout from '../components/layout'
import { usePageContext } from '../context/pageContext'
import useInvoiceForm from '../hooks/useInvoiceForm'
import { Invoice } from '../interfaces'

const Edit: React.FC<PageProps> = () => {
  const form = useInvoiceForm({ mode: 'edit' })
  const { bussinessId } = usePageContext<Invoice>()

  return (
    <Layout>
      <div>
        <GoBack to="/" />
        <FormTitle text={`Edit #${bussinessId}`} />
        <FormikProvider value={form}>
          <InvoiceForm mode="edit" />
        </FormikProvider>
      </div>
    </Layout>
  )
}

export default Edit
