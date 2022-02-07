import type { PostT } from '../types/commentPost'

export const PAGE_SIZE = 5

export async function getPosts() {
  const res = await fetch('https://6144e843411c860017d256f0.mockapi.io/api/v1/posts')

  if (!res.ok) {
    throw new Error('Error fetching list of posts')
  }

  const posts: PostT[] = await res.json()
  posts.sort((a,b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())  // Sort by most recently created

  const pageCount = Math.floor(posts.length / PAGE_SIZE) + (posts.length % PAGE_SIZE === 0 ? 0 : 1)

  return { posts, pageCount }
}
