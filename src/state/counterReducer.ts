
export const initialState: initialStateType = {
    value: 0,
    startValue: 0,
    maxValue: 1
}

export const counterReducer = (state = initialState, action: actionType): initialStateType=> {
    switch (action.type) {
            case 'INCREMENT-VALUE':
        return {...state, value: +state.value + 1}
            case 'RESET-VALUE':
        return {...state, value: state.startValue}
        case 'SET-MAX-VALUE':
            return {...state, maxValue: action.value}
        case 'SET-START-VALUE':
            return {...state, startValue: action.value}
        case 'SET-VALUE-TEXT' :
            return {...state, value: action.value}
        default: return state
    }
}

// action creators
export const incrementValueAC = () => ({type: 'INCREMENT-VALUE'} as const)
export const resetValueAC = () => ({type: 'RESET-VALUE'} as const )
export const setNewValueInCounterAC = (value: string | number) => ({type: 'SET-VALUE-TEXT', value} as const )
export const  setMaxValueAC = (value: number) => ({type: 'SET-MAX-VALUE', value} as const)
export const  setStartValueAC = (value: number) => ({type: 'SET-START-VALUE', value} as const)


// types
export type initialStateType = {
    value: number | string
    startValue: number,
    maxValue: number
}

export type actionType =
    ReturnType<typeof incrementValueAC>         |
    ReturnType<typeof resetValueAC>             |
    ReturnType<typeof setMaxValueAC>            |
    ReturnType<typeof setNewValueInCounterAC>   |
    ReturnType<typeof setStartValueAC>
