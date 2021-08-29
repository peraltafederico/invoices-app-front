import styled from '@emotion/styled'
import { useFormikContext } from 'formik'
import { isEmpty } from 'lodash'
import Text from '../text'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.2rem;
`

const FormErrors = () => {
  const { errors } = useFormikContext<{
    items: { name: string; qty: number; price: number; total: string }[]
  }>()

  return (
    <StyledContainer>
      {!isEmpty(errors) && !errors.items && (
        <Text isError> - All fields must be added</Text>
      )}
      {errors.items && <Text isError> - An item must be added</Text>}
    </StyledContainer>
  )
}

export default FormErrors
