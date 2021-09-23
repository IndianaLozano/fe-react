import { FunctionComponent, useEffect, useState } from 'react'
import { CreateUser } from './CreateUser'
import { UsersTable } from './UsersTable'

export const UsersHome: FunctionComponent = () => {
  const [estaCreandoUnUsuario, setEstaCreandoUnUsuario] =
    useState<boolean>(false)

  return estaCreandoUnUsuario ? (
    <CreateUser onGoBack={() => setEstaCreandoUnUsuario(false)} />
  ) : (
    <UsersTable onNuevoUsuario={() => setEstaCreandoUnUsuario(true)} />
  )
}
