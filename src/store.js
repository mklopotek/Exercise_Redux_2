import { createStore, combineReducers } from 'redux'

import counter, { incAction, decAction } from './state/counter'
import add from './state/add'
import calculator, { inputAction } from './state/calculator'


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
store.dispatch(inputAction(6))
if(store.getState().calculator.input !== 6){
throw new Error ('Input not works!')
}

store.dispatch(inputAction(7))
if(store.getState().calculator.input !== 67){
throw new Error ('Input not works!')
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