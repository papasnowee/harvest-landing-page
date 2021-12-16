import React, { FC } from 'react'

import { Styled } from './styles'
import LeastAuthorityIcon from './icons/leastAuthority.inline.svg'
import PeckShieldIcon from './icons/peckShield.inline.svg'
import HaechiIcon from './icons/haechi.inline.svg'
import CertikIcon from './icons/certik.inline.svg'

export const Audit: FC = () => {
  return (
    <Styled.Container>
      <Styled.Text>Audited by:</Styled.Text>

      <Styled.AuditorsContainer>
        <Styled.LeastAuthorityContainer>
          <LeastAuthorityIcon />
        </Styled.LeastAuthorityContainer>
        <Styled.HaechiContainer>
          <HaechiIcon />
        </Styled.HaechiContainer>
        <Styled.PeckShieldContainer>
          <PeckShieldIcon />
        </Styled.PeckShieldContainer>
        <Styled.CertikContainer>
          <CertikIcon />
        </Styled.CertikContainer>
      </Styled.AuditorsContainer>
    </Styled.Container>
  )
}
