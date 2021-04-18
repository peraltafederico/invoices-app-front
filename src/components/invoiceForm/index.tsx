import { Form } from 'formik'
import BillFrom from './billFrom'
import BillTo from './billTo'
import ItemList from './itemList'

const InvoiceForm = () => {
  return (
    <Form>
      <BillFrom />
      <BillTo />
      <ItemList />
    </Form>
  )
}

export default InvoiceForm
