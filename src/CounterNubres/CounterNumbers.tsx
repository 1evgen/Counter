import {useEffect, useState} from "react";
import s from './CounterNumbers.module.css'
import {CounterButton} from "./CounterButton/CounterButtons";


type typeCounterNumbers = {
    value: number
    maxValue: number
    startValue: number
    changeNumberInCounter: ()=> void
    resetNumberInCounter: ()=> void
    messageForUser: boolean
    setMessageForUser: (messageForUser:boolean)=> void
    isActiveSetting: boolean
}

export const CounterNumbers = (props: typeCounterNumbers) => {

    const okMessage = 'Enter values and press set '
    const isNotOKMessage = 'incorrect value'

    return (
        <div className={s.wrapper}>

            <div className={s.bodyCounter}>
                <div className={s.windowCounter}>
                    {props.isActiveSetting ? (
                        <div className={`${s.number} ${props.value === props.maxValue ? s.maxValue : ''}`}>
                            {props.value}
                        </div>
                    ) : (
                        <div className={`${s.string} ${isNotOKMessage && !props.messageForUser  ? s.isMistakeInEnter : ''}`}>
                            {props.messageForUser ? okMessage : isNotOKMessage}
                        </div>
                    )}
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