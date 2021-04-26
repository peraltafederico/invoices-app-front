import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { MIN_TABLET_MEDIA_QUERY } from '../theme/base'

interface Props {
  container?: boolean
  gap?: string
  rowGap?: string
  sm?: number
  md?: number
  children?: React.ReactNode
  className?: string
}

const StyledContainer = styled.div<Omit<Props, 'children' | 'className'>>`
  ${(props) =>
    props.container &&
    props.gap &&
    css`
      margin-left: -${props.gap};
    `}

  ${(props) =>
    props.container &&
    props.rowGap &&
    css`
      margin-top: -${props.rowGap};
    `}

    ${(props) =>
    !props.container &&
    props.gap &&
    css`
      margin-left: ${props.gap};
    `}

    ${(props) =>
    !props.container &&
    props.rowGap &&
    css`
      margin-top: ${props.rowGap};
    `}

    ${(props) =>
    props.container &&
    css`
      display: flex;
      flex-wrap: wrap;
    `}

    ${(props) =>
    !props.container &&
    css`
      width: calc(${100 / (12 / (props.sm || 12))}% - ${props.gap || '0rem'});

      ${MIN_TABLET_MEDIA_QUERY} {
        width: calc(
          ${100 / (12 / (props.md || props.sm || 12))}% - ${props.gap || '0rem'}
        );
      }
    `}
`

const Grid = ({
  children,
  container,
  gap,
  rowGap,
  sm,
  md,
  className,
}: Props) => {
  return (
    <StyledContainer
      container={container}
      gap={gap}
      rowGap={rowGap}
      sm={sm}
      md={md}
      className={className}
    >
      {React.Children.map(children, (child) => {
        if (container && React.isValidElement(child)) {
          return React.cloneElement(child, { gap, rowGap })
        }
        return child
      })}
    </StyledContainer>
  )
}

export default Grid
