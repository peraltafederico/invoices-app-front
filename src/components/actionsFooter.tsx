/* eslint-disable react/jsx-fragments */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import {
  MIN_LARGE_DISPLAY_MEDIA_QUERY,
  MIN_TABLET_MEDIA_QUERY,
} from '../theme/base'
import Button, { ButtonVariants } from './button'

const StyledContainer = styled.div`
  height: 9.1rem;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-shadow: ${(props) => props.theme.shadows[0]};
  padding: 0 ${(props) => props.theme.space[12]};
  position: fixed;

  ${(props) =>
    props.theme.mode === 'light' &&
    css`
      background-color: ${props.theme.colors.all.white};
    `}

  ${(props) =>
    props.theme.mode === 'dark' &&
    css`
      background-color: ${props.theme.colors.background};
    `}

  ${MIN_TABLET_MEDIA_QUERY} {
    padding: 0 5.6rem;
  }

  ${MIN_LARGE_DISPLAY_MEDIA_QUERY} {
    padding: 0 5.6rem 0 15.9rem;
  }
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

const StyledShadow = styled.div<{ show?: boolean }>`
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
  transition: opacity 0.5s ease, z-index 0s ease 0.5s;
  opacity: ${(props) => (props.show ? '1' : '0')};
  ${(props) =>
    props.show
      ? css`
          z-index: 0;
          transition: opacity 0.5s ease, z-index 0s ease 0s;
        `
      : css`
          z-index: -1;
        `};
`

interface Props {
  actions: {
    buttonVariant: ButtonVariants
    text: string
    onClick?: () => void
    fullWidth?: boolean
    toLeft?: boolean
    disabled?: boolean
  }[]
  showShadow?: boolean
  className?: string
}

const ActionsFooter = ({ actions, showShadow, className }: Props) => {
  return (
    <StyledContainer className={className}>
      <StyledShadow show={showShadow} />
      {actions.map((action) => (
        <StyledButton
          variant={action.buttonVariant}
          key={action.text}
          fullWidth={action.fullWidth}
          toLeft={action.toLeft}
          onClick={action.onClick}
          disabled={action.disabled}
          isThemeable={false}
          type="button"
        >
          {action.text}
        </StyledButton>
      ))}
    </StyledContainer>
  )
}

export default ActionsFooter
