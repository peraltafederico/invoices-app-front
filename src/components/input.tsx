import styled from '@emotion/styled'
import { FieldHookConfig, useField } from 'formik'

type Props = {} & FieldHookConfig<React.ReactText>

const StyledInput = styled.input`
  height: 4.8rem;
  background: ${(props) => props.theme.colors.all.white};
  border: 1px solid ${(props) => props.theme.colors.all.violet.lavenderWeb};
  border-radius: ${(props) => props.theme.radii[4]};
`

const TextField = ({ ...props }: Props) => {
  const [field] = useField(props)

  return <StyledInput type="text" {...field} />
}

export default TextField
