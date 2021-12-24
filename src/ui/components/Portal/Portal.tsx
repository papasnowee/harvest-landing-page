import { FC } from 'react'
import { createPortal } from 'react-dom'

interface Props {
  modalRoot: Element
}

export const Portal: FC<Props> = ({ children, modalRoot }) => {
  const Port = createPortal(children, modalRoot)

  return Port
}
