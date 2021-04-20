import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import Text from './text'

export type ButtonVariants = 'primary' | 'secondary' | 'dark' | 'danger'

type Props = {
  variant?: ButtonVariants
  children: React.ReactNode
  fullWidth?: boolean
  icon?: React.ReactElement
  onClick?: () => void
  className?: string
}

const StyledButton = styled.button<{
  variant?: ButtonVariants
  fullWidth?: boolean
  withIcon: boolean
}>`
  border-radius: ${(props) => `${props.theme.space[12]}`};
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: ${(props) => `${props.theme.space[8]} ${props.theme.space[12]}`};

  &:focus {
    outline: none;
  }

  ${(props) =>
    props.withIcon &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      padding: ${props.theme.space[4]} ${props.theme.space[8]}
        ${props.theme.space[4]} ${props.theme.space[4]};
    `}

  ${(props) =>
    props.variant === 'primary' &&
    css`
      background-color: ${props.theme.colors.secondary};

      &:focus,
      &:hover {
        background-color: ${props.theme.colors.all.violet.mediumPurple};
      }
    `}

  ${(props) =>
    props.variant === 'secondary' &&
    css`
      background-color: ${props.theme.colors.all.grey.ghostWhite};

      &:focus,
      &:hover {
        background-color: ${props.theme.colors.all.violet.lavenderWeb};
      }
    `}

    ${(props) =>
    props.variant === 'dark' &&
    css`
      background-color: ${props.theme.colors.primary};

      &:focus,
      &:hover {
        background-color: ${props.theme.colors.text};
      }
    `}

    ${(props) =>
    props.variant === 'danger' &&
    css`
      background-color: #ec5757;

      &:focus,
      &:hover {
        background-color: #ff9797;
      }
    `}

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`

const StyledChildren = styled(Text)<{ buttonVariant?: ButtonVariants }>`
  color: ${(props) => props.theme.colors.all.white};

  ${(props) =>
    props.buttonVariant === 'secondary' &&
    css`
      color: ${props.theme.colors.all.violet.glaucous};
    `}

  ${(props) =>
    props.buttonVariant === 'dark' &&
    css`
      color: ${props.theme.colors.muted};
    `}
`

const StyledIconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.all.white};
  width: 3.2rem;
  height: 3.2rem;
  margin-right: ${(props) => props.theme.space[4]};
`

const Button = ({
  variant = 'primary',
  fullWidth,
  children,
  icon,
  onClick,
  className,
}: Props) => {
  const withIcon = !!icon

  return (
    <StyledButton
      variant={variant}
      fullWidth={fullWidth}
      withIcon={withIcon}
      onClick={onClick}
      className={className}
    >
      {withIcon && <StyledIconWrapper>{icon}</StyledIconWrapper>}
      <StyledChildren as="span" variant="body2" buttonVariant={variant} isBold>
        {children}
      </StyledChildren>
    </StyledButton>
  )
}

export default Button
