import { createContext } from 'react'

import { ErrorHandlingService } from '../services'

export const ErrorContext = createContext<ErrorHandlingService | undefined>(
  undefined
)
