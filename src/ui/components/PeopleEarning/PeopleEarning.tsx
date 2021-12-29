import React, { FC, useState, useEffect } from 'react'

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
import { API, Transactions } from '@/API'

const makePrettyNumber = (number: number) => {
  const intlNumber = new Intl.NumberFormat('en-US', {
    style: 'decimal',
  }).format(number)
  return intlNumber.split(',').join(' ')
}

export const PeopleEarning: FC = () => {
  // TODO spinner instead '-'
  const [numberOfPeople, setNumberOfPeople] = useState('-')

  useEffect(() => {
    const getUsersNumber = async () => {
      const transactions = await API.getTransactions()
      transactions.sort((a: Transactions, b: Transactions): number => {
        if (a.blockDate > b.blockDate) return -1
        if (a.blockDate === b.blockDate) return 0
        if (a.blockDate < b.blockDate) return 1
      })

      setNumberOfPeople(makePrettyNumber(transactions[0].allOwnersCount))
    }

    getUsersNumber()
  })

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
            {/* <Styled.ButtonContainer>
              <Button isActive={false} leftOrRight="left" onPress={() => {}} />
              <Button isActive={true} leftOrRight="right" onPress={() => {}} />
            </Styled.ButtonContainer> */}
          </Styled.LeftBlock>
          <Styled.CardBlock>
            <Styled.CardColumn>
              <Card icon={icon1} userAddress="edelarocha.eth" percent={4.94} perDay={78.97} />
              <Card icon={icon2} userAddress="expl.eth" percent={0.02} perDay={20.58} />
              <Card icon={icon3} userAddress="farmerfud.eth" percent={0.01} perDay={14.81} />
            </Styled.CardColumn>
            <Styled.CardColumn>
              <Card
                icon={icon4}
                userAddress="0xb78eeb513f717a29089efb023e80f927ca2f0346"
                percent={0.01}
                perDay={558.52}
              />
              <Card
                icon={icon5}
                userAddress="0x50AdF7A75d7cD6132ACc0a2FB21C019011286635"
                percent={0.02}
                perDay={67.35}
              />
              <Card
                icon={icon6}
                userAddress="heartfund.heartrithm.eth"
                percent={0.06}
                perDay={532.67}
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

        {/* <Styled.ButtonContainer>
          <Button isActive={false} leftOrRight="left" onPress={() => {}} />
          <Button isActive={true} leftOrRight="right" onPress={() => {}} />
        </Styled.ButtonContainer> */}
      </Styled.MobileContainer>
      <AsSeenOn />
    </>
  )
}
