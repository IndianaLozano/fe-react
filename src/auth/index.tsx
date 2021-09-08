import { FunctionComponent, useEffect, useRef } from 'react'
import { Subscription } from 'rxjs'

import { useAppConfiguration, useRegisterFatalError } from '../app'
import { useObservableSubscription } from '../shared'

import { LoginForm } from './components'
import { AuthContext } from './context'
import { AuthService } from './services'

const AuthModule: FunctionComponent = ({ children }) => {
  const { current: auth } = useRef(new AuthService(useAppConfiguration()))
  const registerFatalError = useRegisterFatalError()

  const loggedIn = useObservableSubscription(auth.loggedIn)

  useEffect(() => {
    const sub = new Subscription()

    sub.add(auth.errors.subscribe(registerFatalError))
    sub.add(auth.init())

    return () => sub.unsubscribe()
  }, [auth, registerFatalError])

  return (
    <AuthContext.Provider value={auth}>
      {loggedIn ? children : <LoginForm />}
    </AuthContext.Provider>
  )
}

export default AuthModule
export { useLogOut } from './hooks'
