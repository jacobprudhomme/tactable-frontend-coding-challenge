type AuthorT = {
  id: number
  name: string
  avatar: string
  postId: number
  createdAt: Date
  updatedAt: Date
}

type CommentPostSharedT = {
  id: number
  title: string
  description: string
  createdAt: Date
  updatedAt: Date
}

export type CommentT = CommentPostSharedT & { postId: number }

export type PostT = CommentPostSharedT & {
  authors: AuthorT[]
  comments: CommentT[]
}
