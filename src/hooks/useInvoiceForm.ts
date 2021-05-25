import { useFormik } from 'formik'
import * as Yup from 'yup'
import { noop } from 'lodash'
import { usePageContext } from '../context/pageContext'
import { Invoice, InvoiceFormMode } from '../interfaces'

export interface Props {
  mode: InvoiceFormMode
}

const useInvoiceForm = ({ mode = 'create' } = {} as Props) => {
  const {
    billFromCity,
    billFromCountry,
    billFromPostCode,
    billFromStreet,
    billToCity,
    billToCountry,
    billToEmail,
    billToName,
    billToPostCode,
    billToStreet,
    date,
    description,
    items,
  } = usePageContext<Invoice>()

  return useFormik({
    initialValues: {
      streetAddress: mode === 'edit' ? billFromStreet : '',
      city: mode === 'edit' ? billFromCity : '',
      postCode: mode === 'edit' ? billFromPostCode : '',
      country: mode === 'edit' ? billFromCountry : '',
      clientName: mode === 'edit' ? billToName : '',
      clientEmail: mode === 'edit' ? billToEmail : '',
      clientStreetAddress: mode === 'edit' ? billToStreet : '',
      clientCity: mode === 'edit' ? billToCity : '',
      clientPostCode: mode === 'edit' ? billToPostCode : '',
      clientCountry: mode === 'edit' ? billToCountry : '',
      invoiceDate: mode === 'edit' ? +date : '',
      paymentTems: '1',
      projectDescription: mode === 'edit' ? description : '',
      items: mode === 'edit' ? items : [],
    },
    onSubmit: noop,
    validationSchema: Yup.object({
      name: Yup.string().required(),
      select: Yup.string().required(),
      datepicker: Yup.string().required(),
    }),
  })
}

export default useInvoiceForm
