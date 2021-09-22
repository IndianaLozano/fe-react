import { FunctionComponent } from 'react'
import { Table } from 'react-bootstrap'
import { Page, PageHeader } from '../../shared'
import { User } from '../domain'
import { UserRow } from './UserRow'

export const UsersTable: FunctionComponent = () => {
  const users: User[] = []

  for (let i = 0; i < 5; i += 1) {
    const numero = i + 1
    const user: User = {
      id: numero,
      nombre: 'Nombre ' + numero,
      apellido: 'Apellido ' + numero,
      hobby: 'Hobby ' + numero,
    }

    users.push(user)
  }

  return (
    <Page>
      <PageHeader title="Usuarios" buttonLabel="Nuevo Usuario" />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Hobby</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow user={user} key={user.id} />
          ))}
        </tbody>
      </Table>
    </Page>
  )
}
