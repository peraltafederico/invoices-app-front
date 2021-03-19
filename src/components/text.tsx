import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

type Variant = 'body1' | 'body2'

interface Props {
  variant?: Variant
  children: React.ReactNode
  bold?: boolean
  className?: string
  muted?: boolean
}

const StyledText = styled.p<{
  variant: Variant
  bold?: boolean
  muted?: boolean
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
    props.bold &&
    css`
      font-weight: ${props.theme.fontWeights[1]};
    `}

    ${(props) =>
    props.muted &&
    css`
      color: #858bb2;
    `}
`

const Text = ({
  variant = 'body1',
  children,
  bold,
  className,
  muted,
}: Props) => {
  return (
    <StyledText
      variant={variant}
      bold={bold}
      className={className}
      muted={muted}
    >
      {children}
    </StyledText>
  )
}

export default Text
