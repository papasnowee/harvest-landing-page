import React, { FC, useState } from 'react'

import { AsSeenOn } from './components/AsSeenOn'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { Styled } from './styles'
import icon1 from './icons/circle1.inline.svg'
import icon2 from './icons/circle2.inline.svg'
import icon3 from './icons/circle3.inline.svg'
import icon4 from './icons/circle4.inline.svg'
import icon5 from './icons/circle5.inline.svg'
import icon6 from './icons/circle6.inline.svg'
import icon7 from './icons/circle7.inline.svg'
import icon8 from './icons/circle8.inline.svg'

const makePrettyNumber = (number: number) => {
  const intlNumber = new Intl.NumberFormat('en-US', {
    style: 'decimal',
  }).format(number)
  return intlNumber.split(',').join(' ')
}

export const PeopleEarning: FC = () => {
  // TODO spinner instead 15000
  const [numberOfPeople, setNumberOfPeople] = useState(makePrettyNumber(15000))
  // is it end of people list?
  const [isItListEnd, setIsItListEnd] = useState(false)

  return (
    <>
      <Styled.Container>
        <Styled.TopBlockContainer>
          <Styled.LeftBlock>
            <Styled.NumberOfPeople>{numberOfPeople}</Styled.NumberOfPeople>
            <Styled.Text>
              People earning <br />
              With us
            </Styled.Text>
            <Styled.ButtonContainer>
              <Button isActive={false} leftOrRight="left" onPress={() => {}} />
              <Button isActive={true} leftOrRight="right" onPress={() => {}} />
            </Styled.ButtonContainer>
          </Styled.LeftBlock>
          <Styled.CardBlock>
            <Styled.CardColumn>
              <Card
                icon={icon1}
                userAddress="0xecf0545684a06a4ea7b9c2fb1b6c08f50436e9db"
                percent={3.55555}
                perDay={111111.44444}
              />
              <Card
                icon={icon2}
                userAddress="0xecf0545684a06a4ea7b9c2fb1b6c08f50436e9db"
                percent={3.55555}
                perDay={111111.44444}
              />
              <Card
                icon={icon3}
                userAddress="0xecf0545684a06a4ea7b9c2fb1b6c08f50436e9db"
                percent={3.55555}
                perDay={111111.44444}
              />
            </Styled.CardColumn>
            <Styled.CardColumn>
              <Card
                icon={icon4}
                userAddress="0xecf0545684a06a4ea7b9c2fb1b6c08f50436e9db"
                percent={3.55555}
                perDay={111111.44444}
              />
              <Card
                icon={icon5}
                userAddress="0xecf0545684a06a4ea7b9c2fb1b6c08f50436e9db"
                percent={3.55555}
                perDay={111111.44444}
              />
              <Card
                icon={icon6}
                userAddress="0xecf0545684a06a4ea7b9c2fb1b6c08f50436e9db"
                percent={3.55555}
                perDay={111111.44444}
              />
            </Styled.CardColumn>
          </Styled.CardBlock>
        </Styled.TopBlockContainer>
      </Styled.Container>
      <Styled.MobileContainer>
        <Styled.NumberOfPeople>{numberOfPeople}</Styled.NumberOfPeople>
        <Styled.Text>People earning With us</Styled.Text>
        <Styled.CardMobileContainer>
          <Card
            icon={icon7}
            userAddress="0xecf0545684a06a4ea7b9c2fb1b6c08f50436e9db"
            percent={3.55555}
            perDay={111111.44444}
          />
          <Card
            icon={icon8}
            userAddress="0xecf0545684a06a4ea7b9c2fb1b6c08f50436e9db"
            percent={3.55555}
            perDay={111111.44444}
          />
        </Styled.CardMobileContainer>

        <Styled.ButtonContainer>
          <Button isActive={false} leftOrRight="left" onPress={() => {}} />
          <Button isActive={true} leftOrRight="right" onPress={() => {}} />
        </Styled.ButtonContainer>
      </Styled.MobileContainer>
      <AsSeenOn />
    </>
  )
}
