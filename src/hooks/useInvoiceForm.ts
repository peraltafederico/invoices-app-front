import { useFormik } from 'formik'
import * as Yup from 'yup'
import { noop } from 'lodash'

const useInvoiceForm = () => {
  return useFormik({
    initialValues: {
      streetAddress: '',
      city: '',
      postCode: '',
      country: '',
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
