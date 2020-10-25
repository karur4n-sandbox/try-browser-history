import { useContext } from 'react'
import { AppDispatchContext } from './App'

export function useAppDispatch() {
  const dispatch = useContext(AppDispatchContext)
  return dispatch
}
