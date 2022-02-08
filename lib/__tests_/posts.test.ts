import posts from './data'
import { getPosts } from '../posts'
import { resourceLimits } from 'worker_threads'

function fetchSuccess(data: any) {
  return Promise.resolve({
    ok: true,
    json: async () => data,
  })
}

function fetchFailure() {
  return Promise.resolve({ ok: false })
}

describe('Library functionality for handling Posts', () => {
  describe('getPosts()', () => {
    const resourceUrl = 'https://6144e843411c860017d256f0.mockapi.io/api/v1/posts'

    beforeEach(() => {
      global.fetch.mockClear()
    })

    it('should call the correct URL to fetch a list of posts', async () => {
      global.fetch.mockReturnValueOnce(fetchSuccess(posts))

      const result = await getPosts()

      expect(global.fetch.mock.calls[0][0]).toEqual(resourceUrl)
      result.posts.forEach(post => { expect(posts).toContainEqual(post) })
    })

    it('should throw an error if the call did not succeed', async () => {
      global.fetch.mockReturnValueOnce(fetchFailure())

      await expect(getPosts()).rejects.toThrow('Error')
    })

    it('should sort the posts in order of newest date created to oldest', async () => {
      let areSorted = true
      let lastDate = null
      for (let post of posts) {
        if (lastDate === null || post.createdAt.getTime() < lastDate.getTime()) {
          lastDate = post.createdAt
        } else {
          areSorted = false
          break
        }
      }
      expect(areSorted).toBe(false)

      global.fetch.mockReturnValueOnce(fetchSuccess(posts))

      const result = await getPosts()

      areSorted = true
      lastDate = null
      for (let post of result.posts) {
        if (lastDate === null || post.createdAt.getTime() < lastDate.getTime()) {
          lastDate = post.createdAt
        } else {
          areSorted = false
          break
        }
      }
      expect(areSorted).toEqual(true)
    })

    it('should return the number of pages the posts would be split over', async () => {
      global.fetch.mockReturnValueOnce(fetchSuccess(posts))

      let result = await getPosts()

      expect(result.posts.length).toBe(3)
      expect(result.pageCount).toBe(1)

      global.fetch.mockReturnValueOnce(fetchSuccess([...posts, ...posts]))  // 6 posts now

      result = await getPosts()

      expect(result.posts.length).toBe(6)
      expect(result.pageCount).toBe(2)
    })
  })
})
