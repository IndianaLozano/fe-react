import { useCallback } from 'react'
import { useAppConfiguration } from './configuration'

export const useFetch = <Result>(url: string): (() => Promise<Result>) => {
  const appConfiguration = useAppConfiguration()

  return useCallback(
    () =>
      fetch(`${appConfiguration.backEndUrl}/${url}`).then(
        (response) => response.json() as Promise<Result>
      ),
    [appConfiguration.backEndUrl, url]
  )
}
