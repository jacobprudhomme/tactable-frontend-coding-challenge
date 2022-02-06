type Author = {
  id: number
  name: string
  avatar: string
  postId: number
  createdAt: Date
  updatedAt: Date
}

type CommentPostShared = {
  id: number
  title: string
  description: string
  createdAt: Date
  updatedAt: Date
}

type Comment = CommentPostShared & { postId: number }

type Post = CommentPostShared & {
  authors: Author[]
  comments: Comment[]
}

export default Post
