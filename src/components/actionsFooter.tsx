/* eslint-disable react/jsx-fragments */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import Button, { ButtonVariants } from './button'

interface Props {
  actions: {
    buttonVariant: ButtonVariants
    text: string
    onClick?: () => void
    fullWidth?: boolean
    toLeft?: boolean
  }[]
  showShadow?: boolean
}

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

  &:not(:first-child) {
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

const ActionsFooter = ({ actions, showShadow }: Props) => {
  return (
    <React.Fragment>
      <StyledContainer>
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
    </React.Fragment>
  )
}

export default ActionsFooter
