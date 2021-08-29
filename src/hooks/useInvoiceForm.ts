import { useFormik } from 'formik'
import { useMutation } from '@apollo/client'
import * as Yup from 'yup'
import { navigate } from 'gatsby'
import { usePageContext } from '../context/pageContext'
import { Invoice, InvoiceFormMode } from '../interfaces'
import { EDIT_INVOICE } from '../schema/mutations/editInvoice'
import { CREATE_INVOICE } from '../schema/mutations/createInvoice'

Yup.setLocale({
  mixed: {
    required: "can't be empty",
  },
})

interface Props {
  mode: InvoiceFormMode
  returnOnSuccess?: boolean
}

const useInvoiceForm = ({ mode = 'create', returnOnSuccess } = {} as Props) => {
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
      invoiceDate: mode === 'edit' ? +date : new Date(),
      paymentTems: '1',
      projectDescription: mode === 'edit' ? description : '',
      items: mode === 'edit' ? items : [],
      status: mode === 'edit' ? status : 'pending',
      id: mode === 'edit' ? id : '',
    },
    onSubmit: (values) => {
      const variables = {
        ...values,
        invoiceDate: new Date(values.invoiceDate)
          .toISOString()
          .slice(0, 19)
          .replace('T', ' '),
        paymentTems: Number(values.paymentTems),
      }

      if (mode === 'create') {
        createInvoice({
          variables,
        })
      } else {
        updateInvoice({
          variables,
        })
      }

      if (returnOnSuccess) {
        navigate('/')
      }
    },
    validationSchema: Yup.object({
      streetAddress: Yup.string().required(),
      city: Yup.string().required(),
      postCode: Yup.string().required(),
      country: Yup.string().required(),
      clientName: Yup.string().required(),
      clientEmail: Yup.string().email('must be a valid email').required(),
      clientStreetAddress: Yup.string().required(),
      clientCity: Yup.string().required(),
      clientPostCode: Yup.string().required(),
      clientCountry: Yup.string().required(),
      invoiceDate: Yup.string().required(),
      paymentTems: Yup.string().required(),
      projectDescription: Yup.string().required(),
      items: Yup.array()
        .of(
          Yup.object({
            name: Yup.string().required(),
            qty: Yup.number().required(),
            price: Yup.number().required(),
          })
        )
        .required()
        .min(1),
    }),
  })
}

export default useInvoiceForm
