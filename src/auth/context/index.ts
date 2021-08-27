import { createContext } from 'react'

import { AuthService } from '../services'

export const AuthContext = createContext<AuthService | undefined>(undefined)
