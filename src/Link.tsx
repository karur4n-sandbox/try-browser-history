import React, { useCallback } from 'react'
import { css } from 'linaria'
import { useAppDispatch } from './useAppDispatch'

type Props = {
  path: string
  children: React.ReactNode
}

export const Link: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch()

  const navigate = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      const target = e.currentTarget

      const path = target.dataset['path']

      if (path == undefined) {
        return
      }

      dispatch({ type: 'navigate', payload: { path } })
    },
    [dispatch]
  )

  return (
    <a data-path={props.path} onClick={navigate} className={link}>
      {props.children}
    </a>
  )
}

const link = css`
  color: blue;
  text-decoration: underline;
  cursor: pointer;
`
