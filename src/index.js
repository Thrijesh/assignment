import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App'
import reportWebVitals from './reportWebVitals'
import store from './reduxStore/store'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  // REMOVED STRICT MODE BECAUSE IN DEV MODE THE APP RENDERING TWICE
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>
)

reportWebVitals()
