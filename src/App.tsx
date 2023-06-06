import React, {useState} from 'react';
import {CounterNumbers} from './CounterNubres/CounterNumbers';
import {SettingCounter} from './SettingCounter/SettingCounter';
import './App.css';

function App() {
    const [value, setValue] = useState(0);
    const [startValue, setStartValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);


    const settingValue = () => {
        setValue(startValue)
        if(startValue >= maxValue){
        }
    }


    const changeNumberInCounter = () => {
        if (value < maxValue) {
            setValue(value + 1);
        }
    };

    const resetNumberInCounter = () => {
        setValue(0);
    };

    return (
        <div className="App">
            <CounterNumbers
                value={value}
                changeNumberInCounter={changeNumberInCounter}
                resetNumberInCounter={resetNumberInCounter}
                maxValue={maxValue}

            />
            <SettingCounter
                setStartValue={setStartValue}
                setMaxValue={setMaxValue}
                startValue={startValue}
                maxValue={maxValue}
                settingValue={settingValue}

            />
        </div>
    );
}

export default App;