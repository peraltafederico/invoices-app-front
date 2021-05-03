import { Formik } from 'formik'
import { PageProps } from 'gatsby'
import { noop } from 'lodash'
import React from 'react'
import * as Yup from 'yup'
import FormTitle from '../components/formTitle'
import GoBack from '../components/goBack'
import InvoiceForm from '../components/invoiceForm'

const Create: React.FC<PageProps> = () => {
  return (
    <div>
      <GoBack />
      <FormTitle text="New Invoice" />
      <Formik
        initialValues={{
          streetAddress: '19 Union Terrace',
          city: 'London',
          postCode: 'E1 3EZ',
          country: 'United Kingdom',
          clientName: '',
          clientEmail: '',
          clientStreetAddress: '',
          clientCity: '',
          clientPostCode: '',
          clientCountry: '',
          invoiceDate: '',
          paymentTems: '',
          projectDescription: '',
          items: [
            {
              name: '',
              qty: '',
              price: '',
            },
            {
              name: '',
              qty: '',
              price: '',
            },
          ],
        }}
        onSubmit={() => noop()}
        validationSchema={Yup.object({
          name: Yup.string().required(),
          select: Yup.string().required(),
          datepicker: Yup.string().required(),
        })}
      >
        <InvoiceForm mode="create" />
      </Formik>
    </div>
  )
}

export default Create
