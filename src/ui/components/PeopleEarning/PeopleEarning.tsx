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
      if (transactions.length) {
        transactions.sort((a: Transactions, b: Transactions): number => {
          if (a.blockDate > b.blockDate) return -1
          if (a.blockDate === b.blockDate) return 0
          if (a.blockDate < b.blockDate) return 1
        })

        setNumberOfPeople(makePrettyNumber(transactions[0].allOwnersCount))
      } else {
        setNumberOfPeople('Network error')
      }
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
              Users earning <br />
              With us
            </Styled.Text>
            {/* <Styled.ButtonContainer>
              <Button isActive={false} leftOrRight="left" onPress={() => {}} />
              <Button isActive={true} leftOrRight="right" onPress={() => {}} />
            </Styled.ButtonContainer> */}
          </Styled.LeftBlock>
          <Styled.CardBlock>
            <Styled.CardColumn>
              <Card icon={icon1} userAddress="edelarocha.eth" perDay={78.97} />
              <Card icon={icon2} userAddress="expl.eth" perDay={20.58} />
              <Card icon={icon3} userAddress="farmerfud.eth" perDay={14.81} />
            </Styled.CardColumn>
            <Styled.CardColumn>
              <Card
                icon={icon4}
                userAddress="0xb78eeb513f717a29089efb023e80f927ca2f0346"
                perDay={558.52}
              />
              <Card
                icon={icon5}
                userAddress="0x50AdF7A75d7cD6132ACc0a2FB21C019011286635"
                perDay={67.35}
              />
              <Card icon={icon6} userAddress="heartfund.heartrithm.eth" perDay={532.67} />
            </Styled.CardColumn>
          </Styled.CardBlock>
        </Styled.TopBlockContainer>
      </Styled.Container>
      <Styled.MobileContainer>
        <Styled.NumberOfPeople>{numberOfPeople}</Styled.NumberOfPeople>
        <Styled.Text>Users earning With us</Styled.Text>
        <Styled.CardMobileContainer>
          <Card icon={icon7} userAddress="edelarocha.eth" perDay={78.97} />
          <Card icon={icon8} userAddress="heartfund.heartrithm.eth" perDay={532.67} />
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
