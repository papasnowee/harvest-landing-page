import React, { FC, ReactEventHandler, useEffect } from 'react'
import ReactDOM from 'react-dom'

import { Styled } from './styles'
import { Icon, IconName } from '@/ui/Icon'

type ModalProps = {
  visible: boolean
  onClose: ReactEventHandler<HTMLButtonElement>
}

const ModalInner: FC<ModalProps> = (props) => {
  const { onClose, children } = props

  useEffect(() => {
    document.body.classList.add('js-overlay')

    return () => {
      document.body.classList.remove('js-overlay')
    }
  }, [])

  return (
    <>
      {ReactDOM.createPortal(
        <Styled.Overlay>
          <Styled.InnerContainer>
            <Styled.CloseButton onClick={onClose}>
              <Icon iconName={IconName.CLOSE} width={'15px'} height={'15px'} />
            </Styled.CloseButton>
            {children}
          </Styled.InnerContainer>
        </Styled.Overlay>,
        document.body,
      )}
    </>
  )
}

export const Modal: FC<ModalProps> = (props) => {
  const { visible } = props

  if (!visible) {
    return null
  }

  return <ModalInner {...props} />
}
