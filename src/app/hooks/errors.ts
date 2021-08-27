import { useCallback, useContext } from 'react'

import { ErrorContext } from '../context'
import { ErrorHandlingService } from '../services'

export const useErrorService = (): ErrorHandlingService => {
  const service = useContext(ErrorContext)

  if (!service) {
    throw new Error('No ErrorContext')
  }

  return service
}

export const useRegisterFatalError = (): ((error: Error) => void) => {
  const service = useErrorService()

  return useCallback((error) => service.registerFatalError(error), [service])
}
