import styled from '@emotion/styled'
import { ErrorMessage, FieldHookConfig, useField } from 'formik'
import { InputStyles } from './mixins'
import InputLabel from './inputLabel'

type Props = {
  label: string
  type?: 'text' | 'number'
  className?: string
} & FieldHookConfig<string | number>

const StyledInput = styled.input`
  ${InputStyles}
`

const StyledErrorMessage = styled.div`
  margin-top: ${(props) => props.theme.space[5]};
  color: ${(props) => props.theme.colors.all.red.redSalsa};
`

const TextField = ({ label, id, name, className, ...props }: Props) => {
  const [field] = useField({ name, ...props })

  return (
    <div className={className}>
      <InputLabel htmlFor={id || name}>{label}</InputLabel>
      <StyledInput id={id || name} {...field} />
      <ErrorMessage component={StyledErrorMessage} name={name} />
    </div>
  )
}

export default TextField
