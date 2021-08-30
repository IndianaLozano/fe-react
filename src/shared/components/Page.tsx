import { FunctionComponent } from 'react'
import { Container } from 'react-bootstrap'

export const Page: FunctionComponent = ({ children }) => (
  <Container>{children}</Container>
)
