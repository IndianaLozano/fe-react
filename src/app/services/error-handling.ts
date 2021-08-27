import { BehaviorSubject, Observable } from 'rxjs'

export class ErrorHandlingService {
  constructor() {
    this.registerFatalError.bind(this)

    this.fatalError = this.fatalErrorSubject
  }

  fatalError: Observable<Error | undefined>

  registerFatalError(error: Error): void {
    console.error(error)
    this.fatalErrorSubject.next(error)
  }

  private fatalErrorSubject = new BehaviorSubject<Error | undefined>(undefined)
}
