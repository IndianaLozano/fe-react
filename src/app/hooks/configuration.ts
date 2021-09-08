import { useContext } from 'react'

import { AppConfigurationContext } from '../context'
import { AppConfiguration } from '../domain'

export const useAppConfiguration = (): AppConfiguration => {
  const configuration = useContext(AppConfigurationContext)

  if (!configuration) {
    throw new Error('No AppConfigurationContext')
  }

  return configuration
}
