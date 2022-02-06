import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Button, Center, Flex, Spacer, VStack } from '@chakra-ui/react'

import Post from '../components/Post'
import type PostT from '../types/post'

const PAGE_SIZE = 5

async function getPosts() {
  const res = await fetch('https://6144e843411c860017d256f0.mockapi.io/api/v1/posts')

  if (!res.ok) {
    throw new Error('Error fetching list of posts')
  }

  const posts: PostT[] = await res.json()
  posts.sort((a,b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())  // Sort by most recently created

  const pageCount = Math.floor(posts.length / PAGE_SIZE) + (posts.length % 5 === 0 ? 0 : 1)

  return { posts, pageCount }
}

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
