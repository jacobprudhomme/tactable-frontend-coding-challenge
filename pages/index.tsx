import type { NextPage } from 'next'
import Head from 'next/head'
import { useQuery } from 'react-query';
import { Center, VStack } from '@chakra-ui/react'

import Post from '../components/Post'
import type PostT from '../types/post'

async function getPosts() {
  const res = await fetch('https://6144e843411c860017d256f0.mockapi.io/api/v1/posts')

  if (!res.ok) {
    throw new Error('Error fetching list of posts')
  }

  const posts: PostT[] = await res.json()
  posts.sort((a,b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())  // Sort by most recently created

  return posts
}

const Home: NextPage = () => {
  const { isLoading, isError, data: posts, error } = useQuery<PostT[], Error>('posts', getPosts)

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
              : posts?.map(post => <Post key={post.id} post={post} />)
          }
        </VStack>
      </Center>
    </>
  )
}

export default Home
