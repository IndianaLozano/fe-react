export interface User {
  id: number
  mail: string
  status: string
}

export interface CreateUserRequest {
  mail: string
  password: string
}
