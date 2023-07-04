import React, {ChangeEvent, useEffect, useState} from 'react';
import { CounterNumbers } from './CounterNubres/CounterNumbers';
import { SettingCounter } from './SettingCounter/SettingCounter';
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

     const [error, setError] = useState<boolean>(false);
     const state = useSelector<AppRootStateType, initialStateType>(state => state.count)
     const dispatch = useDispatch()


/// Local Storage
    const onSetMaxValue = (value:number)=>{
        dispatch(setMaxValueAC(value))
        // localStorage.setItem('maxValue', JSON.stringify(value))
    }
    const onSetStartValue = (value:number)=>{
            dispatch(setStartValueAC(value))
        // localStorage.setItem('startValue', JSON.stringify(value))
    }

    // useEffect(()=> {
    //     let newMaxValue =  localStorage.getItem('maxValue')
    //     let newStartValue =  localStorage.getItem('startValue')
    //     let newValue = localStorage.getItem('value')
    //         if(newMaxValue){
    //         setMaxValue(JSON.parse(newMaxValue))
    //         }
    //         if(newStartValue){
    //         setStartValue(JSON.parse(newStartValue))
    //         }
    //         if(newValue){
    //             setValue(JSON.parse(newValue))
    //         }
    // },[])

    /// change numbers
    const settingValue = () => {
        dispatch(setStartValueAC(state.startValue))
        dispatch(setNewValueInCounterAC(state.startValue))
        // localStorage.setItem('value', JSON.stringify(startValue))
    };

    const changeNumberInCounter = () => {
        if(state.value < state.maxValue ){
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
        if(inputName === 'max' && value < state.startValue) return false
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