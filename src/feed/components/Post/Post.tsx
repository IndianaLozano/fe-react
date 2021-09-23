import { FunctionComponent } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Post } from '../../domain'

import './post.css'

export interface PostProps {
  post: Post
}

export const PostComponent: FunctionComponent<PostProps> = ({ post }) => (
  <Card className="post">
    <Card.Body>
      <Card.Title className="post-author">
        <span className="mb-2 text-muted">Author: </span>
        {post.user_id}
      </Card.Title>
      <Card.Text>{post.content}</Card.Text>
      <Button variant="primary">Like</Button>
    </Card.Body>
  </Card>
)
