import { FunctionComponent, useState } from 'react'
import { Button } from 'react-bootstrap'

const CountDisplay: FunctionComponent<{ count: number }> = ({ count }) => (
  <span style={{ fontWeight: 'bold' }}>{count}</span>
)

export const Counter: FunctionComponent = () => {
  const [counter, setCounter] = useState<number>(0)

  return (
    <>
      <CountDisplay count={counter} />
      <br />
      <Button variant="primary" onClick={() => setCounter((c) => c + 1)}>
        +
      </Button>
      <Button variant="primary" onClick={() => setCounter((c) => c - 1)}>
        -
      </Button>
    </>
  )
}

export const Profiling: FunctionComponent = () => {
  return (
    <div style={{ fontSize: '30px' }}>
      <Counter />
      <br />
      <Button variant="primary" onClick={() => console.log('Hola')}>
        HOLA
      </Button>
    </div>
  )
}
