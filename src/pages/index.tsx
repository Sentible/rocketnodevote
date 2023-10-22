import Head from 'next/head'
import { useDivaGate } from '@/hooks/lit-hooks/useTokenGate'
import Button from '@/components/Button'
import { BlankCard } from '@/components/Card'
import Image from 'next/image'
import styled from 'styled-components'
import Text from '@/components/Text'
import styles from '@/styles/Home.module.css'
import { useEffect } from 'react'
const StyledCard = styled(BlankCard)`
  align-items: center;
  display: flex;
  justify-content: center;
`

const WelcomeWrapper = styled.div`
  .text--headline {
    max-width: 450px;
    text-align: center;
  }
`

const height = 200
const width = height * 1.6753926702

const rpl_size = 50

const Welcome = () => {
  return (
    <WelcomeWrapper>
      <Text textStyle='headline'>
        Rocket Pool{' '}
        <Image
          alt='Rocket Pool'
          height={rpl_size}
          src='http://localhost:3000/rpl-logo.gif'
          width={rpl_size}
        />{' '}
        Meets
      </Text>
      <StyledCard>
        <Image
          alt='DIVA Protocol'
          height={height}
          src='http://localhost:3000/header.png'
          width={width}
        />
      </StyledCard>
    </WelcomeWrapper>
  )
}

export default function Home() {
  const { connect, isConnected, isNotMember } = useDivaGate()

  const isLocked = isConnected && isNotMember

  console.log({ isLocked, isNotMember })

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        {isLocked ? (
          <> You are not a member of DIVA Protocol.
          </>
        ) :
          !isConnected ? (
            <Button onClick={connect} variant='outline'>
              Connect
            </Button>
          ) :
            <Welcome />
        }
      </main>
    </>
  )
}
