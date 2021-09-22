import { FunctionComponent } from 'react'
import { Button, Card } from 'react-bootstrap'

import './post.css'

export interface PostProps {
  author: string
  content: string
}

export const Post: FunctionComponent<PostProps> = ({ author, content }) => (
  <Card className="post">
    <Card.Body>
      <Card.Title className="post-author">
        <span className="mb-2 text-muted">Author: </span>
        {author}
      </Card.Title>
      <Card.Text>{content}</Card.Text>
      <Button variant="primary">Like</Button>
    </Card.Body>
  </Card>
)
