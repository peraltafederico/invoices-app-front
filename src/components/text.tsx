import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

type Variant = 'body1' | 'body2'

interface Props {
  variant?: Variant
  children: React.ReactNode
  isBold?: boolean
  className?: string
  isMuted?: boolean
  isError?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: React.ElementType<any>
}

const StyledText = styled.p<{
  variant: Variant
  isBold?: boolean
  isMuted?: boolean
  isError?: boolean
}>`
  letter-spacing: ${(props) => props.theme.letterSpacings[4]};

  ${(props) =>
    props.variant === 'body1' &&
    css`
      font-size: ${props.theme.fontSizes[0]};
      line-height: ${props.theme.lineHeights[4]};
      letter-spacing: ${props.theme.letterSpacings[4]};
    `}

  ${(props) =>
    props.variant === 'body2' &&
    css`
      font-size: ${props.theme.fontSizes[1]};
      line-height: ${props.theme.lineHeights[2]};
      letter-spacing: ${props.theme.letterSpacings[3]};
    `}

    ${(props) =>
    props.isBold &&
    css`
      font-weight: ${props.theme.fontWeights[1]};
    `}


    ${(props) =>
    props.theme.mode === 'light' &&
    props.isMuted &&
    css`
      color: #858bb2;
    `}

    ${(props) =>
    props.theme.mode === 'dark' &&
    props.isMuted &&
    css`
      color: ${props.theme.colors.muted};
    `}

    ${(props) =>
    props.isError &&
    css`
      color: ${props.theme.colors.all.red.redSalsa};
    `}
`

const Text = ({
  variant = 'body1',
  children,
  isBold,
  className,
  isMuted,
  isError,
  as = 'p',
}: Props) => {
  return (
    <StyledText
      variant={variant}
      isBold={isBold}
      className={className}
      isMuted={isMuted}
      isError={isError}
      as={as}
    >
      {children}
    </StyledText>
  )
}

export default Text
