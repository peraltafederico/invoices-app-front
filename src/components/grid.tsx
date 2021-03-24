import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'

type Props = {
  container?: boolean
  gap?: string
  rowGap?: string
  span?: number
  children?: React.ReactNode
  className?: string
}

const StyledContainer = styled.div<{
  gap?: string
  rowGap?: string
  container?: boolean
  span?: number
}>`
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
      margin-top: -${props.gap};
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
    props.span &&
    css`
      width: calc(${100 / (12 / props.span)}% - ${props.gap || '0rem'});
    `}
`

const Grid = ({ children, container, gap, rowGap, span, className }: Props) => {
  return (
    <StyledContainer
      container={container}
      gap={gap}
      rowGap={rowGap}
      span={span}
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
