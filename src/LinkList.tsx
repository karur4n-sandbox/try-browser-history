import { css } from 'linaria'
import React from 'react'
import { Link } from './Link'
import { linkedPages } from './pages'

export const LinkList: React.FC = () => {
  return (
    <ul className={list}>
      {Object.values(linkedPages).map((page) => (
        <li key={page.path}>
          <Link path={page.path}>{page.title}</Link>
        </li>
      ))}
    </ul>
  )
}

const list = css`
  list-style-position: inside;
  list-style-type: disc;
`
