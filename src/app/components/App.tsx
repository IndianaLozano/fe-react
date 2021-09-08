import { FunctionComponent, useRef } from 'react'

import AuthModule from '../../auth'
import { ErrorHandlingService } from '../services'
import { AppConfigurationContext, ErrorContext } from '../context'
import { AppConfiguration } from '../domain'

import { AppRouter } from './Router'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/layout.css'
import '../styles/intro.css'

export const App: FunctionComponent<AppConfiguration> = (configuration) => {
  const { current: errorHandling } = useRef(new ErrorHandlingService())

  return (
    <AppConfigurationContext.Provider value={configuration}>
      <ErrorContext.Provider value={errorHandling}>
        <AuthModule>
          <AppRouter />
        </AuthModule>
      </ErrorContext.Provider>
    </AppConfigurationContext.Provider>
  )
}
