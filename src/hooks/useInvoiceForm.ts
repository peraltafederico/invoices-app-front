import { useFormik } from 'formik'
import { useMutation } from '@apollo/client'
import { usePageContext } from '../context/pageContext'
import { Invoice, InvoiceFormMode } from '../interfaces'
import { EDIT_INVOICE } from '../schema/mutations/editInvoice'
import { CREATE_INVOICE } from '../schema/mutations/createInvoice'

interface Props {
  mode: InvoiceFormMode
}

const useInvoiceForm = ({ mode = 'create' } = {} as Props) => {
  const [updateInvoice] = useMutation(EDIT_INVOICE)
  const [createInvoice] = useMutation(CREATE_INVOICE)

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
    id,
    status,
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
      status: mode === 'edit' ? status : 'pending',
    },
    onSubmit: (values) => {
      if (mode === 'create') {
        createInvoice({
          variables: {
            ...values,
            invoiceDate: new Date()
              .toISOString()
              .slice(0, 19)
              .replace('T', ' '),
            paymentTems: Number(values.paymentTems),
            id,
          },
        })
      } else {
        updateInvoice({
          variables: {
            ...values,
            invoiceDate: new Date()
              .toISOString()
              .slice(0, 19)
              .replace('T', ' '),
            paymentTems: Number(values.paymentTems),
            id,
          },
        })
      }
    },
    // validationSchema: Yup.object({
    //   name: Yup.string().required(),
    //   select: Yup.string().required(),
    //   datepicker: Yup.string().required(),
    // }),
  })
}

export default useInvoiceForm
