import { FunctionComponent, useRef } from 'react'

import AuthModule from '../../auth'
import { ErrorHandlingService } from '../services'
import { ErrorContext } from '../context'

import { AppRouter } from './Router'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/layout.css'
import '../styles/intro.css'

export const App: FunctionComponent = () => {
  const { current: errorHandling } = useRef(new ErrorHandlingService())

  return (
    <ErrorContext.Provider value={errorHandling}>
      <AuthModule>
        <AppRouter />
      </AuthModule>
    </ErrorContext.Provider>
  )
}
