
import s from './SupperInput.module.css'
import React, {ChangeEvent, useState} from "react";
import {finished} from "stream";

type typeForSupperInput = {
    titleInput: string
    value: number
    setValue: (value:number)=>void
    maxValue: number
    startValue: number
}


export const SupperInput = (props: typeForSupperInput) => {
    const isError = props.value < 0

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>)=> {
        props.setValue(Number(e.currentTarget.value))


    }



    return (
        <div className={s.wrapperForInput}>
            <label>{props.titleInput}</label>
            <input className={`${s.styleInput} ${isError ? s.isError : ''}`}
                    type={"number"}
                    onChange={onChangeHandler}
                    value={props.value}

            />
        </div>

    )
}


