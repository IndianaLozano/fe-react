import { FunctionComponent, useEffect, useState } from 'react'
import { PostComponent } from './Post'

import { Page } from '../../shared'

import './feed.css'
import { useFetch } from '../../app/hooks/fetch'
import { Post } from '../domain'

export const FeedHome: FunctionComponent = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const fetchPosts = useFetch<Post[]>('posts')

  useEffect(() => {
    fetchPosts().then(setPosts)
  }, [fetchPosts])

  return (
    <Page>
      {posts.map((post) => (
        <PostComponent post={post} />
      ))}
    </Page>
  )
}
