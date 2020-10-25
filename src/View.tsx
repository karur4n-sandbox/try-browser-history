import React from 'react'
import { useCurrentPage } from './useCurrentPage'

export const View: React.FC = () => {
  const currentPage = useCurrentPage()

  if (!currentPage) {
    return null
  }

  const Content = currentPage.content

  return (
    <div>
      <Content />
    </div>
  )
}
