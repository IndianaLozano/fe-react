import { CSSProperties, FunctionComponent } from 'react'
import { Container } from 'react-bootstrap'

export const Page: FunctionComponent<{ style?: CSSProperties }> = ({
  children,
  style,
}) => <Container style={style}>{children}</Container>
