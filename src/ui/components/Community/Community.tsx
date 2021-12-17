import React, { FC } from 'react'

import { Styled } from './styles'
import TwitterIcon from './icons/twitter.inline.svg'
import DiscordIcon from './icons/discord.inline.svg'
import MediumIcon from './icons/medium.inline.svg'
import RedditIcon from './icons/reddit.inline.svg'

export const Community: FC = () => {
  return (
    <Styled.Container>
      <Styled.Heading>Our Community</Styled.Heading>
      <Styled.CommunityPLatformContainer>
        <Styled.CommunityContainer href="https://twitter.com/harvest_finance">
          <Styled.TwitterIconContainer>
            <TwitterIcon />
          </Styled.TwitterIconContainer>
          <Styled.Name>Twitter</Styled.Name>
        </Styled.CommunityContainer>
        <Styled.CommunityContainer href="https://discord.com/invite/R5SeTVR">
          <Styled.DiscordIconContainer>
            <DiscordIcon />
          </Styled.DiscordIconContainer>
          <Styled.Name>Discord</Styled.Name>
        </Styled.CommunityContainer>
        <Styled.CommunityContainer href="https://medium.com/harvest-finance">
          <Styled.MediumIconContainer>
            <MediumIcon />
          </Styled.MediumIconContainer>
          <Styled.Name>Medium</Styled.Name>
        </Styled.CommunityContainer>
        <Styled.CommunityContainer href="https://www.reddit.com/r/HarvestFinance/">
          <Styled.RedditIconContainer>
            <RedditIcon />
          </Styled.RedditIconContainer>
          <Styled.Name>Reddit</Styled.Name>
        </Styled.CommunityContainer>
      </Styled.CommunityPLatformContainer>
    </Styled.Container>
  )
}
