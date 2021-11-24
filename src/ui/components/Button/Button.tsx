import React, { forwardRef } from 'react'

import { Icon } from '@/ui/Icon/Icon'
import { ICON_BOX_CLASSNAME } from '@/ui/Button/constants'
import { Styled } from './styles'

import { ButtonProps } from './types'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { inverted = false, children, iconProps } = props
    const isHasChildren = children !== undefined

    if (!isHasChildren && !iconProps) {
      return null
    }

    return (
      <Styled.Button ref={ref} {...{ ...props, isHasChildren }}>
        {iconProps?.iconName && (
          <Styled.IconBox
            className={ICON_BOX_CLASSNAME}
            inverted={inverted}
            isHasChildren={isHasChildren}
          >
            <Icon {...iconProps} />
          </Styled.IconBox>
        )}
        {isHasChildren && <Styled.TextWrapper>{children}</Styled.TextWrapper>}
      </Styled.Button>
    )
  },
)

Button.displayName = 'Button'
