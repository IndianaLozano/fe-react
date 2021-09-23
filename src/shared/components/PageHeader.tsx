import { FunctionComponent, useEffect, useRef } from 'react'
import { Button } from 'react-bootstrap'

export interface PageHeaderProps {
  buttonLabel: string
  title: string
  onButtonClick: () => void
}

export const PageHeader: FunctionComponent<PageHeaderProps> = ({
  buttonLabel,
  title,
  onButtonClick,
}) => {
  const button = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    button.current?.focus()
  }, [])

  return (
    <div
      className="m-4"
      style={{ display: 'flex', justifyContent: 'space-between' }}
    >
      <h1>{title}</h1>
      <Button ref={button} onClick={onButtonClick}>
        {buttonLabel}
      </Button>
    </div>
  )
}
