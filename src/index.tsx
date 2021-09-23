import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './app/components'
import { Profiling } from './profiling'

ReactDOM.render(
  <React.StrictMode>
    <App backEndUrl="http://localhost:8080" />
    {/* <Profiling /> */}
  </React.StrictMode>,
  document.getElementById('root')
)
