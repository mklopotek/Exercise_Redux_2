const INPUT = 'calculator/INPUT'
const ADD = 'calculator/ADD'
const SUBSTRACT = 'calculator/SUBSTRACT'
const MULTIPLICATION = 'calculator/MULTIPLICATION'
const DIVISION = 'calculator/DIVISION'
const RESULT = 'calculator/RESULT'
const ALLCLEAR = 'calculator/ALLCLEAR'


export const inputAction = (number) => ({
    type: INPUT,
    number
})

export const addAction = () => ({ type: ADD })

export const substractAction = () => ({ type: SUBSTRACT })

export const multiplicationAction = () => ({ type: MULTIPLICATION })

export const divisionAction = () => ({ type: DIVISION })

export const resultAction = () => ({ type: RESULT })

export const allClrearAction = () => ({ type: ALLCLEAR })

const initialState = {
    result: 0,
    input: 0,
    isResultShown: false,
    lastOperation: null
}

const calculateResult = currentState => {
    switch (currentState.lastOperation) {
        case ADD:
            return currentState.result + currentState.input
        case SUBSTRACT:
            return currentState.result - currentState.input
        case MULTIPLICATION:
            return currentState.result * currentState.input
        case DIVISION:
            return currentState.result / currentState.input
        default:
            return currentState.result + currentState.input
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case INPUT:
            return {
                ...state,
                input: state.input * 10 + action.number,
                //the same as: parseInt(`${state.input}` + `${action.number}`),
                // the same as: input: parseInt(String(state.input) + String(action.number))
                isResultShown: false
            }
        case ADD:
            return {
                ...state,
                result: calculateResult(state),
                input: 0,
                isResultShown: true,
                lastOperation: action.type,
            }
        case SUBSTRACT:
            return {
                ...state,
                result: calculateResult(state),
                input: 0,
                isResultShown: true,
                lastOperation: action.type
            }
        case MULTIPLICATION:
            return {
                ...state,
                result: calculateResult(state),
                input: 0,
                isResultShown: true,
                lastOperation: action.type
            }
        case DIVISION:
            return {
                ...state,
                result: calculateResult(state),
                input: 0,
                isResultShown: true,
                lastOperation: action.type
            }
        case RESULT:
            return {
                ...state,
                result: calculateResult(state),
                input: 0,
                isResultShown: true,
                lastOperation: initialState.lastOperation
            }
        case ALLCLEAR:
        return {
            ...initialState
        }
        default:
            return state
    }
}