import { FunctionComponent, useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useFetch } from '../../app/hooks/fetch'
import { Page, PageHeader } from '../../shared'
import { User } from '../domain'
import { UserRow } from './UserRow'

export interface UsersTableProps {
  onNuevoUsuario: () => void
}

export const UsersTable: FunctionComponent<UsersTableProps> = ({
  onNuevoUsuario,
}) => {
  const [users, setUsers] = useState<User[]>([])
  const fetchUsers = useFetch<User[]>('users')

  useEffect(() => {
    fetchUsers().then(setUsers)
  }, [fetchUsers])

  return (
    <Page>
      <PageHeader
        onButtonClick={onNuevoUsuario}
        title="Usuarios"
        buttonLabel="Nuevo Usuario"
      />
      <Table striped bordered>
        <thead>
          <tr>
            <th>Mail</th>
            <th>Estado</th>
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
