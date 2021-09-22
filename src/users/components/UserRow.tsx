import { FunctionComponent } from 'react'
import { User } from '../domain'

export interface UserRowProps {
  user: User
}

export const UserRow: FunctionComponent<UserRowProps> = ({ user }) => (
  <tr>
    <td>{user.nombre}</td>
    <td>{user.apellido}</td>
    <td>{user.hobby}</td>
  </tr>
)
