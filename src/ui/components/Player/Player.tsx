import React, { FC, useState } from 'react'

import { PlayButton } from './components/PlayButton'
import { Styled } from './styles'
import WhatIsHarvestIcon from './whatIsHarvest.inline.svg'
import WhatIsHarvestMobileIcon from './whatIsHarvestMobile.inline.svg'

export const Player: FC = () => {
  const [isShowVideo, setIsShowVideo] = useState(false)

  const play = () => {
    setIsShowVideo(true)
  }
  return (
    <Styled.Container onClick={play}>
      {isShowVideo ? (
        <Styled.Iframe
          src="https://www.youtube.com/embed/9kxPiPj9sFc?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></Styled.Iframe>
      ) : (
        <>
          <Styled.ButtonTextContainer>
            <PlayButton />
            <Styled.Text>What is Harvest?</Styled.Text>
          </Styled.ButtonTextContainer>

          <Styled.SVGContainer>
            <WhatIsHarvestIcon />
          </Styled.SVGContainer>

          <Styled.SVGContainerMobile>
            <WhatIsHarvestMobileIcon />
          </Styled.SVGContainerMobile>
        </>
      )}
    </Styled.Container>
  )
}
