import { AppState } from './App'

export function canGoBackSelector(state: AppState): boolean {
  const { historyCursor, histories } = state

  if (historyCursor == undefined) {
    return false
  }

  return 0 < historyCursor && historyCursor < histories.length
}

export function canGoForwardSelector(state: AppState): boolean {
  const { historyCursor, histories } = state

  if (historyCursor == undefined) {
    return false
  }

  return historyCursor < histories.length - 1
}
