import {useEffect, useState} from "react";
import s from './CounterNumbers.module.css'
import {CounterButton} from "./CounterButton/CounterButtons";


type typeCounterNumbers = {
    value: number
    maxValue: number
    startValue: number
    changeNumberInCounter: ()=> void
    resetNumberInCounter: ()=> void

}

export const CounterNumbers = (props: typeCounterNumbers) => {


    return (
        <div className={s.wrapper}>

            <div className={s.bodyCounter}>
                <div className={s.windowCounter}>
                    <div className={`${s.number} ${props.value === props.maxValue ? s.maxValue : ''}`}>{props.value}</div>
                </div>


                <div className={s.spaceForButtons}>
                    <CounterButton  changeValue={props.changeNumberInCounter}
                                    titleButton={'inc'}
                                    value={props.value}
                                    maxValue={props.maxValue}
                                    startValue={props.startValue}

                    />

                    <CounterButton changeValue={props.resetNumberInCounter}
                                   titleButton={'reset'}
                                   value={props.value}
                                   maxValue={props.maxValue}
                                   startValue={props.startValue}
                    />
                </div>

            </div>
        </div>
    )
}