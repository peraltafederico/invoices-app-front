/* eslint-disable react/jsx-fragments */
import React from 'react'
import { Transition } from 'react-transition-group'
import { useModalContext } from '../context/modalContext'

const ModalRoot = () => {
  const { modal } = useModalContext()
  const { component: Component, props } = modal

  return (
    <Transition in={modal.show} timeout={200} unmountOnExit mountOnEnter>
      {(state) => (
        <React.Fragment>
          {Component && <Component {...props} transitionState={state} />}
        </React.Fragment>
      )}
    </Transition>
  )
}

export default ModalRoot
