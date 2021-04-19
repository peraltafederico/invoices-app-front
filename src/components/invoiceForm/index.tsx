import styled from '@emotion/styled'
import { Form } from 'formik'
import ActionsFooter from '../actionsFooter'
import BillFrom from './billFrom'
import BillTo from './billTo'
import ItemList from './itemList'

const StyledForm = styled(Form)`
  margin-bottom: 7.4rem;
`

const InvoiceForm = () => {
  return (
    <StyledForm>
      <BillFrom />
      <BillTo />
      <ItemList />
      <ActionsFooter
        showShadow
        actions={[
          { buttonVariant: 'secondary', text: 'Cancel' },
          { buttonVariant: 'primary', text: 'Save Changes' },
        ]}
      />
    </StyledForm>
  )
}

export default InvoiceForm
