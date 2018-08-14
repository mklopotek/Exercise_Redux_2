const INC = 'counter/INC'
const DEC = 'counter/DEC'

export const incAction = () => ({ type: INC })
export const decAction = () => ({ type: DEC })

const initialState = {
    number: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case INC:
            return {
                ...state,
                number: state.number + 1
            }
        case DEC:
        return {
            ...state,
            number: state.number - 1
        }
        default:
            return state
    }
}