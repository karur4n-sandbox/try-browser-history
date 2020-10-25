import React from 'react'
import ReactDOM from 'react-dom'
import 'minireset.css/minireset.css'
import { App } from './App'

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root')

  ReactDOM.render(<App />, rootEl)
})
