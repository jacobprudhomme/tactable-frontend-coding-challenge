import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Box, Center, StackDivider, VStack } from '@chakra-ui/react'

import Post from '../components/Post'

const Home: NextPage = () => (
  <>
    <Head>
      <title>Posts</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Center h='100vh' w='100vw'>
      <VStack
        w='60%'
        p={6}
        borderWidth='1px'
        borderRadius='lg'
        align='stretch'
        divider={<StackDivider borderColor='gray.200' />}
        spacing={6}
      >
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </VStack>
    </Center>
  </>
)

export default Home
