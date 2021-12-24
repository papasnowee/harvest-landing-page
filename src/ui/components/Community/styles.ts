import styled from 'styled-components'

import { Size } from '@/ui/style/size'
import { Color, FontWeight } from '@/ui/style'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    margin-top: 49px;
  }
`
const Heading = styled.div`
  margin-bottom: 40px;
  font-weight: ${FontWeight.BOLD};
  color: ${Color.black};
  font-size: 36px;
  line-height: 47px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    margin-bottom: 24px;
    font-size: 23px;
    line-height: 30px;
  }
`

const CommunityContainer = styled.a`
  all: unset;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(172.19deg, #ffffff 6.03%, rgba(255, 255, 255, 0.86) 109.68%);
  box-shadow: 4px 16px 40px rgba(39, 68, 95, 0.1);
  border-radius: 12px;
  width: 275px;
  height: 175px;

  :hover {
    background: ${Color.white};
    box-shadow: 4px 16px 60px rgba(39, 68, 95, 0.08), 4px 16px 40px rgba(39, 68, 95, 0.1);
  }

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    width: 134px;
    height: 108px;
    background: linear-gradient(172.19deg, #ffffff 6.03%, rgba(255, 255, 255, 0.86) 109.68%);
  }
`

const CommunityPLatformContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    flex-wrap: wrap;

    & > :nth-child(-n + 2) {
      margin-bottom: 12px;
    }
  }
`

const TwitterIconContainer = styled.div`
  width: 50px;
  height: 54px;
  margin-top: 40px;
  margin-bottom: 20px;

  svg {
    display: block;
    width: 50px;
    height: 54px;
  }

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    width: 38px;
    height: 38px;
    margin-top: 23px;
    margin-bottom: 13px;

    svg {
      display: block;
      width: 38px;
      height: 38px;
    }
  }
`

const DiscordIconContainer = styled.div`
  width: 54px;
  height: 54px;
  margin-top: 40px;
  margin-bottom: 20px;

  svg {
    display: block;
    width: 54px;
    height: 54px;
  }

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    width: 38px;
    height: 38px;
    margin-top: 23px;
    margin-bottom: 13px;

    svg {
      display: block;
      width: 38px;
      height: 38px;
    }
  }
`

const MediumIconContainer = styled.div`
  width: 54px;
  height: 54px;
  margin-top: 40px;
  margin-bottom: 20px;

  svg {
    display: block;
    width: 54px;
    height: 54px;
  }

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    width: 38px;
    height: 38px;
    margin-top: 23px;
    margin-bottom: 13px;

    svg {
      display: block;
      width: 38px;
      height: 38px;
    }
  }
`

const RedditIconContainer = styled.div`
  width: 54px;
  height: 54px;
  margin-top: 40px;
  margin-bottom: 20px;

  svg {
    display: block;
    width: 54px;
    height: 54px;
  }

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    width: 38px;
    height: 38px;
    margin-top: 23px;
    margin-bottom: 13px;

    svg {
      display: block;
      width: 38px;
      height: 38px;
    }
  }
`
const Name = styled.div`
  font-size: 18px;
  line-height: 23px;
  color: ${Color.black};

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    font-size: 14px;
    line-height: 18px;
  }
`

export const Styled = {
  RedditIconContainer,
  MediumIconContainer,
  DiscordIconContainer,
  Name,
  TwitterIconContainer,
  CommunityContainer,
  CommunityPLatformContainer,
  Container,
  Heading,
}
