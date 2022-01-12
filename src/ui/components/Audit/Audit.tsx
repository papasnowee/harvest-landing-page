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
        <Styled.LeastAuthorityContainer href="https://github.com/harvest-finance/harvest/blob/master/audits/LeastAuthority-Harvest.pdf">
          <LeastAuthorityIcon />
        </Styled.LeastAuthorityContainer>
        <Styled.HaechiContainer href="https://github.com/harvest-finance/harvest/blob/master/audits/Haechi-Harvest.pdf">
          <HaechiIcon />
        </Styled.HaechiContainer>
        <Styled.PeckShieldContainer href="https://github.com/harvest-finance/harvest/blob/master/audits/PeckShield-Harvest.pdf">
          <PeckShieldIcon />
        </Styled.PeckShieldContainer>
        <Styled.CertikContainer href="https://github.com/harvest-finance/harvest/blob/master/audits/CertiK-Harvest.pdf">
          <CertikIcon />
        </Styled.CertikContainer>
      </Styled.AuditorsContainer>
    </Styled.Container>
  )
}
