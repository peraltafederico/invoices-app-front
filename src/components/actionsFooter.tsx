/* eslint-disable react/jsx-fragments */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Button, { ButtonVariants } from './button'

const StyledContainer = styled.div`
  height: 9.1rem;
  background-color: ${(props) => props.theme.colors.all.white};
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-shadow: ${(props) => props.theme.shadows[0]};
  padding: 0 ${(props) => props.theme.space[12]};
`

const StyledButton = styled(Button)<{ toLeft?: boolean }>`
  ${(props) =>
    props.toLeft &&
    css`
      margin-right: auto;
    `}

  &:not(:first-of-type) {
    margin-left: ${(props) => props.theme.space[4]};
  }
`

const StyledShadow = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.0001) 0%,
    rgba(0, 0, 0, 0.1) 100%
  );
  height: 6.4rem;
  position: absolute;
  bottom: 9.1rem;
  left: 0;
  right: 0;
`

interface Props {
  actions: {
    buttonVariant: ButtonVariants
    text: string
    onClick?: () => void
    fullWidth?: boolean
    toLeft?: boolean
  }[]
  showShadow?: boolean
  className?: string
}

const ActionsFooter = ({ actions, showShadow, className }: Props) => {
  return (
    <StyledContainer className={className}>
      {showShadow && <StyledShadow />}
      {actions.map((action) => (
        <StyledButton
          variant={action.buttonVariant}
          key={action.text}
          fullWidth={action.fullWidth}
          toLeft={action.toLeft}
        >
          {action.text}
        </StyledButton>
      ))}
    </StyledContainer>
  )
}

export default ActionsFooter
