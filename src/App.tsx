import React, { useEffect, useState } from 'react';
import { CounterNumbers } from './CounterNubres/CounterNumbers';
import { SettingCounter } from './SettingCounter/SettingCounter';
import './App.css';

type messageForUsers = 'enter value and press set' | 'incorrect value'

function App() {

    const [value, setValue] = useState(0);
    const [startValue, setStartValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);
    const [messageForUser, setMessageForUser]= useState(true)
    const [isActiveSetting, setIsActiveSetting]= useState(false)



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
            if(newMaxValue){
            setMaxValue(JSON.parse(newMaxValue))
            }
            if(newStartValue){
            setStartValue(JSON.parse(newStartValue))
            }
    },[])


    /// change numbers
    const settingValue = () => {
        setValue(startValue)
        setIsActiveSetting(true)
    };

    const changeNumberInCounter = () => {
        if (value < maxValue) {
            setValue(value + 1);
        }
    };
    const resetNumberInCounter = () => { setValue(startValue)};
//

    useEffect(()=>{
        if (maxValue <= startValue || startValue < 0){
            console.log("mistake")
            setMessageForUser(false)
            setIsActiveSetting(false)
        }else{
            setMessageForUser(true)
            setIsActiveSetting(false)
            console.log("ok")
        }
    }, [maxValue,startValue])


    return (
        <div className="App">
            <CounterNumbers
                value={value}
                changeNumberInCounter={changeNumberInCounter}
                resetNumberInCounter={resetNumberInCounter}
                maxValue={maxValue}
                startValue={startValue}
                messageForUser={messageForUser}
                setMessageForUser={setMessageForUser}
                isActiveSetting={isActiveSetting}
            />
            <SettingCounter
                setStartValue={onSetStartValue}
                setMaxValue={onSetMaxValue}
                startValue={startValue}
                maxValue={maxValue}
                settingValue={settingValue}

            />
        </div>
    );
}

export default App;