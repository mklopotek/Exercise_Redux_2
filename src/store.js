import { createStore, combineReducers } from 'redux'

import counterReducer, { incAction, decAction } from './state/counter'

const reducer = combineReducers({
    counter: counterReducer
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

store.dispatch(incAction())
store.dispatch(incAction())
store.dispatch(decAction())

