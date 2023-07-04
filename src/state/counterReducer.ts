
export type initialStateType = {
    value: number | string
    startValue: number,
    maxValue: number
}

export const initialState: initialStateType = {
    value: 0,
    startValue: 0,
    maxValue: 0
}

export type incrementValueActionType = {type: 'INCREMENT-VALUE'}
export type resetValueActionType = {type: 'RESET-VALUE'}
export type startValueActionType =  {type: 'SET-VALUE-IN-SETTING'}
export type setMaxValueActionType = {
    type: 'SET-MAX-VALUE',
    value: number
}
export type setStartValueActionType = {
    type: 'SET-START-VALUE',
    value: number
}


export type actionType = incrementValueActionType | resetValueActionType | startValueActionType
                            | setMaxValueActionType | setStartValueActionType
export const counterReducer = (state = initialState, action: actionType): initialStateType=> {
    switch (action.type) {
            case 'INCREMENT-VALUE':
        return {...state, value: +state.value + 1}
            case 'RESET-VALUE':
        return {...state, value: state.startValue}
            case 'SET-VALUE-IN-SETTING':
        return {...state, startValue: state.startValue, maxValue: state.maxValue}
        case 'SET-MAX-VALUE':
            return {...state, maxValue: action.value}
        case 'SET-START-VALUE':
            return {...state, startValue: action.value}
        default: return state
    }
}

export const incrementValueAC = (): incrementValueActionType => {
    return {type: 'INCREMENT-VALUE'}
}
export const resetValueAC = (): resetValueActionType => {
    return {type: 'RESET-VALUE'}
}
// export const setValueInSettingAC = (): startValueActionType => {
//     return {type: 'SET-VALUE-IN-SETTING'}
// }

export const  setMaxValueAC = (value: number): setMaxValueActionType => {
    return {type: 'SET-MAX-VALUE', value}
}

export const  setStartValueAC = (value: number): setStartValueActionType => {
    return {type: 'SET-START-VALUE', value}
}