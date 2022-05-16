import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer, applyMiddleware(thunk))

// JUST TO SEE THE STORE DATA IN THE BROWSER'S CONSOLE
window.store = store

export default store