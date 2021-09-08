import { createContext } from 'react'

import { AppConfiguration } from '../domain'
import { ErrorHandlingService } from '../services'

export const ErrorContext = createContext<ErrorHandlingService | undefined>(
  undefined
)

export const AppConfigurationContext = createContext<
  AppConfiguration | undefined
>(undefined)
