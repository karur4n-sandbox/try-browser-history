import { useContext } from 'react'
import { AppStateContext } from './App'

export function useAppState() {
  const state = useContext(AppStateContext)
  return state
}
