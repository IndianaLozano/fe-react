import {
  BehaviorSubject,
  delay,
  filter,
  map,
  mapTo,
  Observable,
  skip,
  Subject,
  Subscription,
} from 'rxjs'

import type { AppConfiguration } from '../../app'
import type { LogInRequest } from '../domain'

const TOKEN_STORAGE_KEY = 'token'

export type AuthServiceOptions = Pick<AppConfiguration, 'backEndUrl'>

export class AuthService {
  constructor(private options: AuthServiceOptions) {
    this.token = this.tokenSubject = new BehaviorSubject(
      localStorage.getItem(TOKEN_STORAGE_KEY) ?? undefined
    )
    this.loggingIn = this.loggingInSubject
    this.errors = this.errorsSubject
    this.loggedIn = this.token.pipe(map(Boolean))
  }

  loggingIn: Observable<boolean>
  token: Observable<string | undefined>
  loggedIn: Observable<boolean>
  errors: Observable<Error>

  init(): Subscription {
    const subscription = new Subscription()

    const tokenWithoutStoredValue = this.token.pipe(skip(1))
    const newToken = tokenWithoutStoredValue.pipe(filter(Boolean))

    // Log in
    subscription.add(
      this.logInRequest
        .pipe(delay(2000), mapTo('83167767-8cb5-4852-88c0-4cddb36342ec'))
        .subscribe(this.tokenSubject)
    )

    // Loading
    subscription.add(
      this.logInRequest.pipe(mapTo(true)).subscribe(this.loggingInSubject)
    )

    subscription.add(
      newToken.pipe(mapTo(false)).subscribe(this.loggingInSubject)
    )

    // Persistence
    subscription.add(
      newToken.subscribe((token) => {
        localStorage.setItem(TOKEN_STORAGE_KEY, token)
      })
    )

    subscription.add(
      tokenWithoutStoredValue.pipe(filter((token) => !token)).subscribe(() => {
        localStorage.removeItem(TOKEN_STORAGE_KEY)
      })
    )

    return subscription
  }

  logIn(request: LogInRequest): void {
    console.log(
      `Logging in with email ${request.email} and password ${Array.from(
        request.password
      )
        .map(() => '*')
        .join('')}`
    )
    this.logInRequest.next(request)
  }

  logOut(): void {
    console.log('Logged out')
    this.tokenSubject.next(undefined)
  }

  private tokenSubject: BehaviorSubject<string | undefined>
  private logInRequest = new Subject<LogInRequest>()
  private loggingInSubject = new BehaviorSubject<boolean>(false)
  private errorsSubject = new Subject<Error>()
}
