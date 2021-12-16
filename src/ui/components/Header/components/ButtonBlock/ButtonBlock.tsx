import React, { FC, useState } from 'react'

import { Styled } from './styles'

import { ScrolledDown } from '../../Header'

export const ButtonBlock: FC<ScrolledDown> = (props) => {
  const { scrolledDown = false } = props

  const [isHoveredTokenomics, setIsHoveredTokenomics] = useState(false)

  const handleMouseOverTokenomics = () => {
    setIsHoveredTokenomics(true)
  }

  const handleMouseOutTokenomics = () => {
    setIsHoveredTokenomics(false)
  }

  const [isHoveredStatistics, setIsHoveredStatistics] = useState(false)

  const handleMouseOverStatistics = () => {
    setIsHoveredStatistics(true)
  }

  const handleMouseOutStatistics = () => {
    setIsHoveredStatistics(false)
  }

  const [isHoveredBlog, setIsHoveredBlog] = useState(false)

  const handleMouseOverBlog = () => {
    setIsHoveredBlog(true)
  }

  const handleMouseOutBlog = () => {
    setIsHoveredBlog(false)
  }

  return (
    <Styled.Container>
      <Styled.TextContainer>
        <Styled.Link
          onMouseOver={handleMouseOverTokenomics}
          onMouseOut={handleMouseOutTokenomics}
          href=""
        >
          <Styled.Text isHovered={isHoveredTokenomics} scrolledDown={scrolledDown}>
            Tokenomics
          </Styled.Text>
        </Styled.Link>
      </Styled.TextContainer>
      <Styled.TextContainer>
        <Styled.Link
          href=""
          onMouseOver={handleMouseOverStatistics}
          onMouseOut={handleMouseOutStatistics}
        >
          <Styled.Text isHovered={isHoveredStatistics} scrolledDown={scrolledDown}>
            Statistics
          </Styled.Text>
        </Styled.Link>
      </Styled.TextContainer>
      <Styled.TextContainer>
        <Styled.Link href="" onMouseOver={handleMouseOverBlog} onMouseOut={handleMouseOutBlog}>
          <Styled.Text isHovered={isHoveredBlog} scrolledDown={scrolledDown}>
            Blog
          </Styled.Text>
        </Styled.Link>
      </Styled.TextContainer>
      <Styled.TextContainer>
        <Styled.DashboardContainer href="" scrolledDown={scrolledDown}>
          Dashboard
        </Styled.DashboardContainer>
      </Styled.TextContainer>
    </Styled.Container>
  )
}
