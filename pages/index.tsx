import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Button, Center, Flex, Spacer, VStack } from '@chakra-ui/react'

import Post from '../components/Post'
import { PAGE_SIZE, getPosts } from '../lib/posts'
import type { PostT } from '../types/commentPost'

type Query = {
  posts: PostT[]
  pageCount: number
}

const Home: NextPage = () => {
  const [page, setPage] = useState(1)
  const { isLoading, isError, data, error } = useQuery<Query, Error>('posts', getPosts)
  const { posts, pageCount } = data || { posts: [], pageCount: 1 }

  return (
    <>
      <Head>
        <title>Posts</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Center minH='100vh' w='100vw' py={16}>
        <VStack
          w='50%'
          p={6}
          borderWidth='1px'
          borderRadius='md'
          borderColor='gray.100'
          align='stretch'
          spacing={6}
        >
          {isLoading
            ? <p>Loading...</p>
            : isError
              ? <p>There was an error: {error?.message}</p>
              : Array.from({ length: PAGE_SIZE }, (_, i) => (page - 1) * PAGE_SIZE + i)
                  .map(i => i < posts.length && <Post key={posts[i].id} post={posts[i]} />)
          }
          <Flex>
            <Button
              leftIcon={<ArrowBackIcon />}
              onClick={() => { setPage(page - 1); window.scrollTo(0, 0) }}
              disabled={page === 1}
            >
              Prev Page
            </Button>
            <Spacer />
            <Button
              rightIcon={<ArrowForwardIcon />}
              onClick={() => { setPage(page + 1); window.scrollTo(0, 0) }}
              disabled={page === pageCount}
            >
              Next Page
            </Button>
          </Flex>
        </VStack>
      </Center>
    </>
  )
}

export default Home
