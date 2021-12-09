import { FC } from 'react'
import { createPortal } from 'react-dom'
import { observer } from 'mobx-react'

import { useStores } from '@/stores/utils'

export const Portal: FC = observer(({ children }) => {
  // TODO: implement with ref
  const {
    appStore: { ref },
  } = useStores()

  const modalRoot = document.getElementById('modal-root')

  const Port = createPortal(children, modalRoot)

  return Port
})
