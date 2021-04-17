import styled from '@emotion/styled'
import { ErrorMessage, FieldHookConfig, useField } from 'formik'
import Label from './label'
import Text from './text'

type Props = {
  label: string
  type?: 'text' | 'number'
} & FieldHookConfig<string | number>

const StyledInput = styled.input`
  height: 4.8rem;
  background: ${(props) => props.theme.colors.all.white};
  border: 1px solid ${(props) => props.theme.colors.all.violet.lavenderWeb};
  border-radius: ${(props) => props.theme.radii[4]};
  font-weight: ${(props) => props.theme.fontWeights[1]};
  padding: 0 ${(props) => props.theme.space[10]};
  font-size: ${(props) => props.theme.fontSizes[1]};
  line-height: ${(props) => props.theme.lineHeights[2]};
  letter-spacing: ${(props) => props.theme.letterSpacings[3]};
  color: ${(props) => props.theme.colors.text};

  &:focus {
    outline: none;
  }

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.colors.all.violet.mediumPurple};
  }
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledErrorMessage = styled.div`
  margin-top: ${(props) => props.theme.space[5]};
  color: ${(props) => props.theme.colors.all.red.redSalsa};
`

const TextField = ({ label, id, name, ...props }: Props) => {
  const [field] = useField({ name, ...props })

  return (
    <StyledContainer>
      <Label htmlFor={id || name}>
        <Text variant="body2" muted>
          {label}
        </Text>
      </Label>
      <StyledInput id={id || name} {...field} />
      <ErrorMessage component={StyledErrorMessage} name={name} />
    </StyledContainer>
  )
}

export default TextField
