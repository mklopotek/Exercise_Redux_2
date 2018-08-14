import { createStore, combineReducers } from 'redux'

import counterReducer from './state/counter'
import addReducer, { addAction } from './state/add'


const reducer = combineReducers({
    counter: counterReducer,
    add: addReducer
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.dispatch(addAction(50))


// window.counterInc = () => store.dispatch(incAction())
// window.counterDec = () => store.dispatch(decAction())
// window.counterAdd = (number) => store.dispatch(addAction(number))
// window.counterSubstract = (number) => store.dispatch(substractAction(number))