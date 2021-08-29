import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Check from '../assets/check.inline.svg'
import InputLabel from './inputLabel'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  className?: string
  id?: string
  name?: string
}

const StyledCustomCheckbox = styled.div`
  position: absolute;
  display: flex;
  box-sizing: border-box;
  border-radius: 2px;
  width: 100%;
  height: 100%;
  left: 0;
  transition: background 0.1s ease-in-out;

  ${(props) =>
    props.theme.mode === 'dark' &&
    css`
      background: ${props.theme.colors.primary};
    `}

  ${(props) =>
    props.theme.mode === 'light' &&
    css`
      background: ${props.theme.colors.all.violet.lavenderWeb};
    `}
`

const StyledCheckMark = styled(Check)`
  opacity: 0;
  transition: opacity 0.1s ease-in-out;
  position: absolute;
`

const StyledCheckbox = styled.input`
  opacity: 0;
  position: absolute;
  z-index: 1;
  cursor: pointer;
  width: 100%;
  height: 100%;
  left: 0;

  &:hover + ${StyledCustomCheckbox} {
    border: 1px solid
      ${(props) => props.theme.colors.all.violet.mediumSlateBlue};
  }

  &:checked + ${StyledCustomCheckbox} {
    background: ${(props) => props.theme.colors.all.violet.mediumSlateBlue};
  }

  &:checked ~ ${StyledCheckMark} {
    opacity: 1;
  }
`

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`

const StyledCheckboxContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
`

const StyledInputLabel = styled(InputLabel)`
  margin-left: 1.3rem;
  font-weight: bold;
  margin-bottom: 0;
  cursor: pointer;

  & p {
    ${(props) =>
      props.theme.mode === 'dark' &&
      css`
        color: ${props.theme.colors.all.white};
      `}

    ${(props) =>
      props.theme.mode === 'light' &&
      css`
        color: ${props.theme.colors.all.darkBlue.spaceCadet[300]};
      `}
  }
`

const Checkbox = ({ label, id, name, className, ...props }: Props) => {
  return (
    <StyledContainer className={className}>
      <StyledCheckboxContainer>
        <StyledCheckbox
          type="checkbox"
          id={id || name}
          name={name}
          {...props}
        />
        <StyledCustomCheckbox />
        <StyledCheckMark />
      </StyledCheckboxContainer>
      <StyledInputLabel htmlFor={id || name}>{label}</StyledInputLabel>
    </StyledContainer>
  )
}

export default Checkbox
