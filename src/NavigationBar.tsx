import { css } from 'linaria'
import React, { useCallback, useMemo } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import cx from 'classnames'
import { useCurrentPage } from './useCurrentPage'
import { useAppDispatch } from './useAppDispatch'
import { useAppState } from './useAppState'
import { canGoBackSelector, canGoForwardSelector } from './historySelector'

function useNavigation() {
  const dispatch = useAppDispatch()
  const state = useAppState()

  const canGoBack = useMemo<boolean>(() => canGoBackSelector(state), [state])
  const canGoForward = useMemo<boolean>(() => canGoForwardSelector(state), [
    state,
  ])

  const goBack = useCallback(() => {
    if (!canGoBack) {
      return
    }

    dispatch({ type: 'back' })
  }, [canGoBack, dispatch])

  const goForward = useCallback(() => {
    if (!canGoForward) {
      return
    }

    dispatch({ type: 'forward' })
  }, [canGoForward, dispatch])

  return {
    goBack,
    goForward,
    canGoBack,
    canGoForward,
  }
}

export const NavigationBar: React.FC = () => {
  const currentPage = useCurrentPage()

  const { goBack, goForward, canGoBack, canGoForward } = useNavigation()

  const backButtonCx = cx(buttonStyle, { [disableButtonStyle]: !canGoBack })
  const forwardButtonCx = cx(buttonStyle, {
    [disableButtonStyle]: !canGoForward,
  })

  return (
    <div className={wrapper}>
      <div className={buttonGroup}>
        <BsArrowLeft className={backButtonCx} onClick={goBack} />
        <BsArrowRight className={forwardButtonCx} onClick={goForward} />
      </div>
      {currentPage && <p>{currentPage.title}</p>}
    </div>
  )
}

const wrapper = css`
  display: flex;
  background-color: #f8f9fa;
  border-bottom: 1px solid #f1f3f5;
  padding: 8px;
`

const buttonGroup = css`
  display: flex;
  margin-right: 16px;
`

const buttonStyle = css`
  color: #495057;
  font-size: 24px;
  cursor: pointer;

  &:not(:first-child) {
    margin-left: 8px;
  }
`

const disableButtonStyle = css`
  color: #ced4da;
  cursor: auto;
`
