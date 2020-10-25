import React from 'react'
import { Page } from '../App'
import { LinkList } from '../LinkList'
import { PageTemplate } from './PageTemplate'

const PageA: React.FC = () => {
  return (
    <PageTemplate>
      <p>Aページです</p>
      <LinkList />
    </PageTemplate>
  )
}

const PageB: React.FC = () => {
  return (
    <PageTemplate>
      <p>ページBです</p>
      <LinkList />
    </PageTemplate>
  )
}

const PageC: React.FC = () => {
  return (
    <PageTemplate>
      <p>This is Page C.</p>
      <LinkList />
    </PageTemplate>
  )
}

export const linkedPages: { [path: string]: Page } = {
  '/a': {
    path: '/a',
    title: 'A ページ',
    content: PageA,
  },
  '/b': {
    path: '/b',
    title: 'ページ B',
    content: PageB,
  },
  '/c': {
    path: '/c',
    title: 'Page C',
    content: PageC,
  },
}

const BlankPage: React.FC = () => {
  return (
    <PageTemplate>
      <PageTemplate>Blank ページだよ🐹</PageTemplate>
      <LinkList />
    </PageTemplate>
  )
}

export const pages: { [path: string]: Page } = {
  ...linkedPages,
  '@@@pages/blank': {
    path: '@@@pages/blank',
    title: 'Blank ページ',
    content: BlankPage,
  },
}
