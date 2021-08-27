import { useEffect, useState } from 'react'
import { BehaviorSubject, Observable } from 'rxjs'

export const useObservableSubscription = <T>(
  observable: Observable<T>
): T | undefined => {
  const [lastValue, setLastValue] = useState<T | undefined>(() => {
    if (observable instanceof BehaviorSubject) {
      return observable.getValue() as T
    }
  })

  useEffect(() => {
    const sub = observable.subscribe(setLastValue)
    return () => sub.unsubscribe()
  }, [observable])

  return lastValue
}
