import styled from '@emotion/styled'
import { Form } from 'formik'
import useBreakpoints from '../../hooks/useBreakpoints'
import { MIN_TABLET_MEDIA_QUERY } from '../../theme/base'
import ActionsFooter from '../actionsFooter'
import BillFrom from './billFrom'
import BillTo from './billTo'
import ItemList from './itemList'

const StyledForm = styled(Form)`
  margin-bottom: 7.4rem;

  ${MIN_TABLET_MEDIA_QUERY} {
    margin-bottom: 2.5rem;
  }
`

const StyledCreateFooter = styled(ActionsFooter)`
  & button {
    padding: 1.6rem;
    white-space: nowrap;
  }
`

interface Props {
  mode: 'create' | 'edit'
}

const InvoiceForm: React.FC<Props> = ({ mode }) => {
  const { isMobileOnly } = useBreakpoints()

  return (
    <StyledForm>
      <BillFrom />
      <BillTo mode={mode} />
      <ItemList />
      {isMobileOnly &&
        {
          create: (
            <StyledCreateFooter
              showShadow
              actions={[
                {
                  buttonVariant: 'secondary',
                  text: 'Discard',
                  fullWidth: true,
                },
                { buttonVariant: 'dark', text: 'Save as Draft' },
                { buttonVariant: 'primary', text: 'Save & Send' },
              ]}
            />
          ),
          edit: (
            <ActionsFooter
              showShadow
              actions={[
                { buttonVariant: 'secondary', text: 'Cancel' },
                { buttonVariant: 'primary', text: 'Save Changes' },
              ]}
            />
          ),
        }[mode]}
    </StyledForm>
  )
}

export default InvoiceForm
