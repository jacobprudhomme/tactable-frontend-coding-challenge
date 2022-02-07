import type { NextPage } from 'next'
import Head from 'next/head'
import { Center } from '@chakra-ui/react'
import PostsContainer from '../components/PostsContainer'

const Home: NextPage = () => (
  <>
    <Head>
      <title>Posts</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Center
      minH='100vh'
      w='100vw'
      py={{
        base: 4,
        md: 16,
      }}
      bgColor='gray.50'
    >
      <PostsContainer />
    </Center>
  </>
)

export default Home
