const ADD = 'ADD/ADD'

export const addAction = (number) => ({
    type: ADD,
    number
})

const initialState = {
    result: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                result: state.result + action.number
            }
        default:
            return state
    }
}