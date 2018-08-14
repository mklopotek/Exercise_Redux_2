import { createStore, combineReducers } from 'redux'

import counter, { incAction, decAction } from './state/counter'
import add from './state/add'
import calculator, { inputAction, addAction } from './state/calculator'


const reducer = combineReducers({
    counter,
    add,
    calculator
})

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );


//automating testing
const getDiplayedVal = () => {
    const state = store.getState().calculator
  
    return state.isResultShown ? state.result : state.input
  }
  
  store.dispatch(inputAction(6))
  if (getDiplayedVal() !== 6) {
    throw new Error('Input not works! Should be 6!')
  }
  store.dispatch(inputAction(7))
  if (getDiplayedVal() !== 67) {
    throw new Error('Input not works! Should be 67!')
  }
  store.dispatch(inputAction(3))
  if (getDiplayedVal() !== 673) {
    throw new Error('Input not works! Should be 673!')
  }
  store.dispatch(addAction())
  if (getDiplayedVal() !== 673) {
    throw new Error('Add not works! Should be 673!')
  }
  store.dispatch(inputAction(3))
  if (getDiplayedVal() !== 3) {
    throw new Error('Input not works! Should be 3!')
  }
  store.dispatch(addAction())
  if (getDiplayedVal() !== 676) {
    throw new Error('Add not works! Should be 676!')
  }


//functions for manual testing only

  window.inputAction = number => store.dispatch(inputAction(number))

  window.state = () => {
    const state = store.getState().calculator  
    console.log({...state, 
        display: state.isResultShown ? state.result : state.input  })
  }


// window.counterInc = () => store.dispatch(incAction())
// window.counterDec = () => store.dispatch(decAction())
// window.counterAdd = (number) => store.dispatch(addAction(number))
// window.counterSubstract = (number) => store.dispatch(substractAction(number))