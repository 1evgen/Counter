import React, {ChangeEvent, useEffect, useState} from 'react';
import { CounterNumbers } from './CounterNubres/CounterNumbers';
import { SettingCounter } from './SettingCounter/SettingCounter';
import './App.css';
import {isDisabled} from "@testing-library/user-event/dist/utils";



function App() {

    const [value, setValue] = useState <number | string>(0);
    const [startValue, setStartValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);
    const [error, setError] = useState<boolean>(false);

/// Local Storage
    const onSetMaxValue = (value:number)=>{
        setMaxValue(value)
        localStorage.setItem('maxValue', JSON.stringify(value))
    }
    const onSetStartValue = (value:number)=>{
        setStartValue(value)
        localStorage.setItem('startValue', JSON.stringify(value))
    }

    useEffect(()=> {
        let newMaxValue =  localStorage.getItem('maxValue')
        let newStartValue =  localStorage.getItem('startValue')
        let newValue = localStorage.getItem('value')
            if(newMaxValue){
            setMaxValue(JSON.parse(newMaxValue))
            }
            if(newStartValue){
            setStartValue(JSON.parse(newStartValue))
            }
            if(newValue){
                setValue(JSON.parse(newValue))
            }
    },[])

    /// change numbers
    const settingValue = () => {
        setValue(startValue)
        localStorage.setItem('value', JSON.stringify(startValue))
    };

    const changeNumberInCounter = () => {
        if (value < maxValue) {
            setValue(+value + 1);
        }
    };
    const resetNumberInCounter = () => {
        setValue(startValue)
    };

    const callback = (value: number, inputName: 'max' | 'start') => {
        if (!validate(value, inputName)) {
            setValue('incorrect value')
            setError(true)

        } else {
            setValue('Enter values and press set')
            setError(false)

        }
    }

    const validate = (value: number, inputName: 'max' | 'start'): boolean => {
        if (inputName === 'max' && value < 0) return false
        if (inputName === 'start' && value < 0) return false
        if (inputName === 'start' && value > maxValue) return false
        if(inputName === 'max' && value < startValue) return false
        if (inputName === 'start' && value === maxValue) return false;
        if (inputName === 'max' && value === startValue) return false;
        else return true
    }

    return (
        <div className="App">
            <CounterNumbers
                value={value}
                changeNumberInCounter={changeNumberInCounter}
                resetNumberInCounter={resetNumberInCounter}
                maxValue={maxValue}
                startValue={startValue}
                error={error}

            />

            <SettingCounter
                setStartValue={onSetStartValue}
                setMaxValue={onSetMaxValue}
                startValue={startValue}
                maxValue={maxValue}
                settingValue={settingValue}
                callback={callback}
                value={value}
            />
        </div>
    );
}

export default App;