import { useFormik } from 'formik'
import { useMutation } from '@apollo/client'
import { usePageContext } from '../context/pageContext'
import { Invoice, InvoiceFormMode } from '../interfaces'
import { EDIT_INVOICE } from '../schema/mutations/editInvoice'

interface Props {
  mode: InvoiceFormMode
}

const useInvoiceForm = ({ mode = 'create' } = {} as Props) => {
  const [updateInvoice] = useMutation(EDIT_INVOICE)

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
    onSubmit: (values) => {
      updateInvoice({
        variables: {
          ...values,
          invoiceDate: new Date().toISOString().slice(0, 19).replace('T', ' '),
          paymentTems: Number(values.paymentTems),
          id,
        },
      })
    },
    // validationSchema: Yup.object({
    //   name: Yup.string().required(),
    //   select: Yup.string().required(),
    //   datepicker: Yup.string().required(),
    // }),
  })
}

export default useInvoiceForm
