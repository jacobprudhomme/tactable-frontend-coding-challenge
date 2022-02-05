import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Box, Center, StackDivider, VStack } from '@chakra-ui/react'


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
        <Box h='40px' bg='yellow.200'>
          Lorem ipsum
        </Box>
        <Box h='40px' bg='tomato'>
          dolor
        </Box>
        <Box h='40px' bg='pink.100'>
          sit amet
        </Box>
      </VStack>
    </Center>
  </>
)

export default Home
