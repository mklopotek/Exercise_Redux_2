const ADD = 'ADD/ADD'

export const addAction = (number) => ({
    type: ADD,
    number
})

const initialState = {
    number: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                number: state.number + action.number
            }
        default:
            return state
    }
}