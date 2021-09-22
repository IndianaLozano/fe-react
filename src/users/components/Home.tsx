import { FunctionComponent } from 'react'
import { CreateUser } from './CreateUser'
import { UsersTable } from './UsersTable'

const ESTA_CREANDO_UN_USUARIO = false

export const UsersHome: FunctionComponent = () =>
  ESTA_CREANDO_UN_USUARIO ? <CreateUser /> : <UsersTable />
