import React, {useState} from 'react';
import {CounterNumbers} from './CounterNubres/CounterNumbers';
import {SettingCounter} from './SettingCounter/SettingCounter';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {
    incrementValueAC,
    initialStateType, resetValueAC,
    setMaxValueAC, setNewValueInCounterAC,
    setStartValueAC,
} from "./state/counterReducer";

function AppWithReducer() {
    console.log('render App')
    const [error, setError] = useState<boolean>(false);
    const state = useSelector<AppRootStateType, initialStateType>(state => state.count)
    const dispatch = useDispatch()

    const onSetMaxValue = (value: number) => {
        console.log('set max value')
        dispatch(setMaxValueAC(value))
    }
    const onSetStartValue = (value: number) => {
        console.log('set start value')
        dispatch(setStartValueAC(value))
    }
    /// change numbers
    const settingValue = () => {
        console.log('change value in settings')
        dispatch(setStartValueAC(state.startValue))
        dispatch(setNewValueInCounterAC(state.startValue))
    };
    const changeNumberInCounter = () => {
        if (state.value < state.maxValue) {
            dispatch(incrementValueAC())
        }

    };
    const resetNumberInCounter = () => {
        dispatch(resetValueAC())
    };
    const callback = (value: number, inputName: 'max' | 'start') => {
        if (!validate(value, inputName)) {
            dispatch(setNewValueInCounterAC('incorrect value'))
            setError(true)

        } else {
            dispatch(setNewValueInCounterAC('Enter values and press set'))
            setError(false)

        }
    }

    const validate = (value: number, inputName: 'max' | 'start'): boolean => {
        if (inputName === 'max' && value < 0) return false
        if (inputName === 'start' && value < 0) return false
        if (inputName === 'start' && value > state.maxValue) return false
        if (inputName === 'max' && value < state.startValue) return false
        if (inputName === 'start' && value === state.maxValue) return false;
        if (inputName === 'max' && value === state.startValue) return false;
        else return true
    }
    return (
         <div className="App">
            <CounterNumbers
                value={state.value}
                changeNumberInCounter={changeNumberInCounter}
                resetNumberInCounter={resetNumberInCounter}
                maxValue={state.maxValue}
                startValue={state.startValue}
                error={error}

            />
            <SettingCounter
                setStartValue={onSetStartValue}
                setMaxValue={onSetMaxValue}
                startValue={state.startValue}
                maxValue={state.maxValue}
                settingValue={settingValue}
                callback={callback}
                value={state.value}

            />
        </div>
    );
}

export default AppWithReducer;