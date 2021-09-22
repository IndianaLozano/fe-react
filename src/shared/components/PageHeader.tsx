import { FunctionComponent } from 'react'
import { Button } from 'react-bootstrap'

export interface PageHeaderProps {
  buttonLabel: string
  title: string
}

export const PageHeader: FunctionComponent<PageHeaderProps> = ({
  buttonLabel,
  title,
}) => {
  return (
    <div
      className="m-4"
      style={{ display: 'flex', justifyContent: 'space-between' }}
    >
      <h1>{title}</h1>
      <Button>{buttonLabel}</Button>
    </div>
  )
}
