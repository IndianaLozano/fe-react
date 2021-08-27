import {
  ChangeEventHandler,
  FormEvent,
  FunctionComponent,
  useCallback,
  useState,
} from 'react'
import { Button, Card, Form } from 'react-bootstrap'

import { useLogIn, useLogingIn } from '../..'

import './styles.css'

export const LoginForm: FunctionComponent = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const logIn = useLogIn()
  const loginIn = useLogingIn()

  const onEmailChanged: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setEmail(event.target.value)
    },
    []
  )

  const onPasswordChanged: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setPassword(event.target.value)
    },
    []
  )

  const submit = useCallback(
    (event: FormEvent) => {
      logIn(email, password)
      event.preventDefault()
    },
    [email, logIn, password]
  )

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
      id="login-form"
    >
      <Card style={{ maxWidth: '600px', padding: '20px' }}>
        <Card.Title>Ingreso</Card.Title>
        <Card.Body>
          <Form onSubmit={submit}>
            <Form.Group controlId="email" className="form-group">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control type="email" required onChange={onEmailChanged} />
              <Form.Control.Feedback type="invalid">
                Ingrese un correo electrónico
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="password" className="form-group">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                required
                onChange={onPasswordChanged}
              />
              <Form.Control.Feedback type="invalid">
                Ingrese una contraseña
              </Form.Control.Feedback>
            </Form.Group>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}
            >
              <Button
                variant="primary"
                type="submit"
                style={{ marginTop: '20px' }}
                disabled={loginIn}
              >
                {loginIn ? 'Ingresando...' : 'Ingresar'}
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}
