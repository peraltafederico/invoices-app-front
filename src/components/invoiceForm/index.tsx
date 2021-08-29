import styled from '@emotion/styled'
import { Form, useFormikContext } from 'formik'
import { navigate } from 'gatsby'
import useBreakpoints from '../../hooks/useBreakpoints'
import { InvoiceFormMode } from '../../interfaces'
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
    padding: 1.4rem;
    /* white-space: nowrap; */
  }
`

interface Props {
  mode: InvoiceFormMode
}

const InvoiceForm: React.FC<Props> = ({ mode }) => {
  const { isMobileOnly } = useBreakpoints()
  const form = useFormikContext()

  const submit = () => {
    form.handleSubmit()
    navigate('/')
  }

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
                  onClick: () => navigate('/'),
                },
                {
                  buttonVariant: 'dark',
                  text: 'Save as Draft',
                  onClick: async () => {
                    form.setFieldValue('status', 'draft')
                    submit()
                  },
                },
                {
                  buttonVariant: 'primary',
                  text: 'Save & Send',
                  onClick: submit,
                },
              ]}
            />
          ),
          edit: (
            <ActionsFooter
              showShadow
              actions={[
                {
                  buttonVariant: 'secondary',
                  text: 'Cancel',
                  onClick: () => navigate('/'),
                },
                {
                  buttonVariant: 'primary',
                  text: 'Save Changes',
                  onClick: submit,
                },
              ]}
            />
          ),
        }[mode]}
    </StyledForm>
  )
}

export default InvoiceForm
