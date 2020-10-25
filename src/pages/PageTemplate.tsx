import React from 'react'
import { css } from 'linaria'

type Props = {
  children: React.ReactNode
}

export const PageTemplate: React.FC<Props> = (props) => {
  return <div className={wrapper}>{props.children}</div>
}

const wrapper = css`
  margin: 16px;
`
