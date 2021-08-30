import { FunctionComponent, useEffect, useRef } from 'react'
import { Subscription } from 'rxjs'

import { useObservableSubscription } from '../../shared'
import { AuthContext, AuthService, LoginForm } from '../../auth'
import { ErrorHandlingService } from '../services'
import { ErrorContext } from '../context'

import { AppRouter } from './Router'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/layout.css'
import '../styles/intro.css'

export const App: FunctionComponent = () => {
  const { current: errorHandling } = useRef(new ErrorHandlingService())
  const { current: auth } = useRef(new AuthService())

  const loggedIn = useObservableSubscription(auth.loggedIn)

  useEffect(() => {
    const sub = new Subscription()

    sub.add(auth.errors.subscribe(errorHandling.registerFatalError))
    sub.add(auth.init())

    return () => sub.unsubscribe()
  }, [auth, auth.errors, errorHandling.registerFatalError])

  return (
    <ErrorContext.Provider value={errorHandling}>
      <AuthContext.Provider value={auth}>
        {loggedIn ? <AppRouter /> : <LoginForm />}
      </AuthContext.Provider>
    </ErrorContext.Provider>
  )
}
