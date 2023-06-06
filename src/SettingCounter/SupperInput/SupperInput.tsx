
import s from './SupperInput.module.css'
import React, {ChangeEvent, useState} from "react";

type typeForSupperInput = {
    titleInput: string
    value: number
    setValue: React.Dispatch<React.SetStateAction<number>>
}


export const SupperInput = (props: typeForSupperInput) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>)=> {
        props.setValue(Number(e.currentTarget.value))

    }



    return (
        <div className={s.wrapperForInput}>
            <label>{props.titleInput}</label>
            <input className={s.styleInput}
                    type={"number"}
                    onChange={onChangeHandler}
                    value={props.value}

            />
        </div>

    )

}


