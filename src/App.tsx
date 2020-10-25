import React, { useEffect, useReducer } from 'react'
import { canGoBackSelector, canGoForwardSelector } from './historySelector'
import { NavigationBar } from './NavigationBar'
import { pages } from './pages'
import { View } from './View'

export type Page = {
  path: string
  title: string
  content: React.ComponentType
}

type Action =
  | {
      type: 'navigate'
      payload: {
        path: string
      }
    }
  | {
      type: 'back'
    }
  | {
      type: 'forward'
    }

export type AppState = {
  histories: Page[]
  historyCursor?: number
}

const initialState: AppState = {
  histories: [],
  historyCursor: undefined,
}

function reducer(currentState: AppState, action: Action): AppState {
  switch (action.type) {
    case 'navigate': {
      const page = pages[action.payload.path]
      if (page == undefined) {
        // TODO: 404 エラーを表示したい
        throw new Error('wrong path')
      }
      const { histories, historyCursor } = currentState
      const newHistoryCursor =
        historyCursor == undefined ? 0 : historyCursor + 1

      const newHistories = (() => {
        const droped = histories.slice(0, newHistoryCursor)
        return [...droped, page]
      })()
      return {
        ...currentState,
        histories: newHistories,
        historyCursor: newHistoryCursor,
      }
    }
    case 'back': {
      const canGoBack = canGoBackSelector(currentState)
      if (!canGoBack) {
        throw new Error('can not go back')
      }

      const { historyCursor } = currentState

      return {
        ...currentState,
        historyCursor: historyCursor! - 1,
      }
    }
    case 'forward': {
      const canGoForward = canGoForwardSelector(currentState)
      if (!canGoForward) {
        throw new Error('can not go forward')
      }
      const { historyCursor } = currentState

      return {
        ...currentState,
        historyCursor: historyCursor! + 1,
      }
    }
  }
}

export const AppStateContext = React.createContext<AppState>(undefined as any)
export const AppDispatchContext = React.createContext<React.Dispatch<Action>>(
  undefined as any
)

export const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // initial state のほうがいいかも
  useEffect(() => {
    dispatch({
      type: 'navigate',
      payload: {
        path: '@@@pages/blank',
      },
    })
  }, [dispatch])

  console.log('LOG:', state)

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        <div>
          <NavigationBar />
          <View />
        </div>
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}
