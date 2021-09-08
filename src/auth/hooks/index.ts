import { useCallback, useContext, useMemo } from 'react'

import { useObservableSubscription } from '../../shared/hooks'
import { AuthContext } from '../context'

import type { AuthService } from '../services'

export const useAuthService = (): AuthService => {
  const service = useContext(AuthContext)

  if (!service) {
    throw new Error('No AuthContext')
  }

  return service
}

export const useLogIn = (): ((email: string, password: string) => void) => {
  const service = useAuthService()

  return useCallback(
    (email, password) => {
      service.logIn({ email, password })
    },
    [service]
  )
}

export const useLogingIn = (): boolean => {
  const service = useAuthService()

  return useObservableSubscription(service.loggingIn) ?? false
}

export const useLogOut = (): (() => void) => {
  const service = useAuthService()

  return useCallback(() => {
    service.logOut()
  }, [service])
}

export const useToken = (): string => {
  const service = useAuthService()
  const token = useObservableSubscription(service.token)

  if (!token) {
    throw new Error(
      'Do not use useToken outside a logged-in auth context, we dont want to be handling potentially undefined tokens. If you think youre not doing so something seriously wrong is going on'
    )
  }

  return token
}

export const useAuthenticatedFetchRequest = (request?: Request): Request => {
  const token = useToken()
  const previousRequest = useMemo(() => request ?? ({} as Request), [request])

  return useMemo(
    () => ({
      ...previousRequest,
      headers: {
        ...(previousRequest.headers ?? {}),
        Authorization: `Bearer ${token}`,
      },
    }),
    [previousRequest, token]
  )
}
