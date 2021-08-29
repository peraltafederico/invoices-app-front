import styled from '@emotion/styled'
import { FieldHookConfig, useField } from 'formik'
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

const TextField = ({ label, id, name, className, type, ...props }: Props) => {
  const [field, meta] = useField({ name, ...props })

  return (
    <div className={className}>
      <InputLabel errorMessage={meta.error} htmlFor={id || name}>
        {label}
      </InputLabel>
      <StyledInput
        isError={!!meta.error}
        type={type}
        id={id || name}
        {...field}
      />
    </div>
  )
}

export default TextField
