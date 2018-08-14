import { createStore, combineReducers } from 'redux'

import counter, { incAction, decAction } from './state/counter'
import add from './state/add'


const reducer = combineReducers({
    counter,
    add
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  window.counterInc = () => store.dispatch(incAction())
  window.counterDec = () => store.dispatch(decAction())

// window.counterInc = () => store.dispatch(incAction())
// window.counterDec = () => store.dispatch(decAction())
// window.counterAdd = (number) => store.dispatch(addAction(number))
// window.counterSubstract = (number) => store.dispatch(substractAction(number))