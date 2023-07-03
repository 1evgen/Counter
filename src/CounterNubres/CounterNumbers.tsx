
import s from './CounterNumbers.module.css'
import {CounterButton} from "./CounterButton/CounterButtons";
import React from "react";
import {isDisabled} from "../helper/Helper";


type typeCounterNumbers = {
    value: number | string
    maxValue: number
    startValue: number
    changeNumberInCounter: ()=> void
    resetNumberInCounter: ()=> void
    error: boolean

}

export const CounterNumbers = React.memo( (props: typeCounterNumbers) => {

    const isIncButtonDisabled = isDisabled('inc', props.value, props.maxValue, props.startValue);
    const isResetButtonDisabled = isDisabled('reset', props.value, props.maxValue, props.startValue);

    return (
        <div className={s.wrapper}>
            <div className={s.bodyCounter}>
                <div className={s.windowCounter}>
                    {
                       typeof props.value === "string"  ?
                            <div className={`${s.string}  ${props.error ? s.isMistakeInEnter : ''}`}>{props.value}</div>
                           :
                            <div className={`${s.number} ${props.value === props.maxValue ? s.maxValue : ''}`}>
                                {props.value}
                            </div>
                    }
                </div>

                <div className={s.spaceForButtons}>
                    <CounterButton  changeValue={props.changeNumberInCounter}
                                    titleButton={'inc'}
                                    value={props.value}
                                    maxValue={props.maxValue}
                                    startValue={props.startValue}
                                    isDisabled={isIncButtonDisabled}

                    />
                    <CounterButton changeValue={props.resetNumberInCounter}
                                   titleButton={'reset'}
                                   value={props.value}
                                   maxValue={props.maxValue}
                                   startValue={props.startValue}
                                   isDisabled={isResetButtonDisabled}
                    />
                </div>
            </div>
        </div>
    )
})