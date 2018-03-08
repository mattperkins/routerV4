import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import {injectGlobal} from 'styled-components'
import App from './App'

//eslint-disable-next-line
injectGlobal`
body {
font-family: sans-serif;
background: #f7f7f7;
}
`

ReactDOM.render(<App />, 
  document.getElementById('root'))
  registerServiceWorker()
