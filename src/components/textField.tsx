import styled from '@emotion/styled'
import { ErrorMessage, FieldHookConfig, useField } from 'formik'
import { InputStyles } from './mixins'
import WithLabel from './withLabel'

type Props = {
  label: string
  type?: 'text' | 'number'
} & FieldHookConfig<string | number>

const StyledInput = styled.input`
  ${InputStyles}
`

const StyledErrorMessage = styled.div`
  margin-top: ${(props) => props.theme.space[5]};
  color: ${(props) => props.theme.colors.all.red.redSalsa};
`

const TextField = ({ label, id, name, ...props }: Props) => {
  const [field] = useField({ name, ...props })

  return (
    <WithLabel label={label} id={id || name}>
      <StyledInput id={id || name} {...field} />
      <ErrorMessage component={StyledErrorMessage} name={name} />
    </WithLabel>
  )
}

export default TextField
