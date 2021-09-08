import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './app/components'

ReactDOM.render(
  <React.StrictMode>
    <App backEndUrl="http://localhost:8080" />
  </React.StrictMode>,
  document.getElementById('root')
)
