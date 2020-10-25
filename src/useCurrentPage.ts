import { useContext, useMemo } from 'react'
import { Page, AppStateContext } from './App'

export function useCurrentPage(): Page | undefined {
  const { histories, historyCursor } = useContext(AppStateContext)

  const currentPage = useMemo<Page | undefined>(() => {
    if (historyCursor == undefined) {
      return undefined
    }
    return histories[historyCursor]
  }, [histories, historyCursor])

  return currentPage
}
