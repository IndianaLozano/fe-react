import { FunctionComponent, useCallback, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Page, PageHeader } from '../../shared'
import { CreateUserRequest } from '../domain'

export interface CreateUserProps {
  onGoBack: () => void
}

export const CreateUser: FunctionComponent<CreateUserProps> = ({
  onGoBack,
}) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const submitForm = useCallback(
    (ev) => {
      ev.preventDefault()

      const user: CreateUserRequest = {
        mail: email,
        password: password,
      }

      const body = JSON.stringify(user)

      fetch('http://localhost:8080/users', {
        method: 'POST',
        body: body,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    },
    [email, password]
  )

  return (
    <Page>
      <PageHeader
        title="Nuevo usuario"
        buttonLabel="Volver"
        onButtonClick={onGoBack}
      />
      <Form onSubmit={submitForm}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            required
            maxLength={50}
            type="email"
            placeholder="Ingrese el correo electrónico"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Constraseña</Form.Label>
          <Form.Control
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            required
            maxLength={100}
            minLength={6}
            type="password"
            placeholder="Ingrese la contraseña"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Crear
        </Button>
      </Form>
    </Page>
  )
}
