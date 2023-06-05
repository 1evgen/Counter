import {useState} from "react";
import s from './CounterNumbers.module.css'
import {CounterButton} from "./CounterButton/CounterButtons";



export const CounterNumbers = () => {
    const [value, setValue] = useState(0)

    const changeNumberInCounter = ()=> {
        if (value < 5) {
            setValue(value + 1)
        }
    }
    const resetNumberInCounter = ()=> {setValue(0)}


    return (
        <div className={`${s.wrapper} ${s.background}`}>

            <div className={s.bodyCounter}>
                <div className={s.windowCounter}>
                    <div className={`${s.number} ${value === 5 ? s.maxValue : ''}`}>{value}</div>
                </div>


                <div className={s.spaceForButtons}>
                    <CounterButton  changeValue={changeNumberInCounter}
                                    titleButton={'inc'}
                                    value={value}
                    />

                    <CounterButton changeValue={resetNumberInCounter}
                                   titleButton={'reset'}
                                   value={value} />
                </div>

            </div>
        </div>
    )
}