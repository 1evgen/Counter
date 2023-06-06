import s from './SettingCounter.module.css'
import {CounterButton} from "../CounterNubres/CounterButton/CounterButtons";
import React, {useState} from "react";
import {SupperInput} from "./SupperInput/SupperInput";


type typeSetting = {
    setStartValue: React.Dispatch<React.SetStateAction<number>>;
    setMaxValue: React.Dispatch<React.SetStateAction<number>>;
    startValue: number
    maxValue: number
    settingValue: () => void

}


export const SettingCounter = (props: typeSetting) => {
    const error = props.maxValue <= props.startValue

    return (
        <div className={s.wrapper}>
            <div className={s.bodySettingCounter}>

                <div className={`${s.windowForValue} ${error ? s.error : ''} `}>
                    <SupperInput titleInput={"Max value:"}
                                 value={props.maxValue}
                                 setValue={props.setMaxValue}

                    />

                    <SupperInput titleInput={"Start value:"}
                                 value={props.startValue}
                                 setValue={props.setStartValue}

                    />
                </div>

                <div className={s.windowForButton}>
                    <CounterButton  titleButton={'set'}
                                   changeValue={props.settingValue}
                                   value={0}
                                   maxValue={0}

                    />

                </div>
            </div>
        </div>

    )
}

