/* eslint-disable react/jsx-fragments */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { useEffect } from 'react'
import { useModalContext } from '../context/modalContext'
import { MIN_LARGE_DISPLAY_MEDIA_QUERY } from '../theme/base'
import Backdrop from './backdrop'

interface Props {
  className?: string
}

const StyledWrapper = styled.div`
  padding: ${(props) => props.theme.space[13]};
  height: calc(100vh - 7.2rem);
  position: fixed;
  z-index: 2;
  top: 7.2rem;
  left: 0;
  max-width: 61.6rem;
  overflow-y: auto;

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
  

  ${MIN_LARGE_DISPLAY_MEDIA_QUERY} {
    padding-left: 13.5rem;
    z-index: 1;
    top: 0;
    height: 100vh;
    max-width: 71.9rem;
  }
`

const Drawer: React.FC<Props> = ({ className, children }) => {
  const { hideModal } = useModalContext()

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <React.Fragment>
      <Backdrop onClick={hideModal} />
      <StyledWrapper className={className}>{children}</StyledWrapper>
    </React.Fragment>
  )
}

export default Drawer
