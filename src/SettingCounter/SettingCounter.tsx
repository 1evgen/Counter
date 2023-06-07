import s from './SettingCounter.module.css'
import {CounterButton} from "../CounterNubres/CounterButton/CounterButtons";
import React, {useState} from "react";
import {SupperInput} from "./SupperInput/SupperInput";


type typeSetting = {
    setStartValue:(value:number)=>void
    setMaxValue:(value:number)=>void;
    startValue: number
    maxValue: number
    settingValue: () => void
}


export const SettingCounter = (props: typeSetting) => {
     const error = props.maxValue <= props.startValue


    return (
        <div className={s.wrapper}>
            <div className={s.bodySettingCounter}>

                <div className={`${s.windowForValue}  ${error ? s.error : ''}` }>
                    <SupperInput titleInput={"Max value:"}
                                 value={props.maxValue}
                                 setValue={props.setMaxValue}
                                 maxValue={props.maxValue}// refactor
                                 startValue={props.startValue}//refactor

                    />

                    <SupperInput titleInput={"Start value:"}
                                 value={props.startValue}
                                 setValue={props.setStartValue}
                                 maxValue={props.maxValue}   //refactor
                                 startValue={props.startValue} //refactor

                    />
                </div>

                <div className={s.windowForButton}>
                    <CounterButton  titleButton={'set'}
                                   changeValue={props.settingValue}
                                   value={0} //refactor
                                   maxValue={props.maxValue}
                                   startValue={props.startValue}
                    />

                </div>
            </div>
        </div>

    )
}

