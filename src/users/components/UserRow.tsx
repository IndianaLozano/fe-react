import { FunctionComponent } from 'react'
import { User } from '../domain'

export interface UserRowProps {
  user: User
}

export const UserRow: FunctionComponent<UserRowProps> = ({ user }) => (
  <tr>
    <td>{user.mail}</td>
    <td>{user.status}</td>
  </tr>
)
