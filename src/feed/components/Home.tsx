import { FunctionComponent, useEffect, useState } from 'react'
import { PostComponent } from './Post'

import { Page } from '../../shared'

import './feed.css'
import { useFetch } from '../../app/hooks/fetch'
import { Post } from '../domain'
import { Alert, Spinner } from 'react-bootstrap'

export const FeedHome: FunctionComponent = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')
  const fetchPosts = useFetch<Post[]>('posts')

  useEffect(() => {
    fetchPosts()
      .then((posts) => {
        setPosts(posts)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        setError(error.message)
      })
  }, [fetchPosts])

  let pageContent

  if (loading) {
    pageContent = (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '50px',
        }}
      >
        <Spinner animation="border" variant="primary" />
      </div>
    )
  } else if (error) {
    pageContent = (
      <Alert variant="danger" style={{ marginTop: '20px' }}>
        Oops hubo un error!
        <br />
        {error}
      </Alert>
    )
  } else if (posts.length === 0) {
    pageContent = 'No hay posts'
  } else {
    pageContent = posts.map((post) => (
      <PostComponent key={post.id} post={post} />
    ))
  }

  return <Page>{pageContent}</Page>
}
