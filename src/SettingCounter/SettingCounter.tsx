import s from './SettingCounter.module.css'
import {CounterButton} from "../CounterNubres/CounterButton/CounterButtons";
import {useState} from "react";
import {SupperInput} from "../CounterNubres/CounterButton/SupperInput/SupperInput";


export const SettingCounter = () => {
    const[valueSetting, setValueSetting] = useState(0)

    const set = ()=> {

    }

    return (
    <div className={s.wrapper}>
        <div className={s.bodySettingCounter}>

            <div className={s.windowForValue}>
                <SupperInput labelValue ={"Max value:"}  />
                <SupperInput labelValue ={"Start value:"} />
            </div>

            <div className={s.windowForButton}>
                <CounterButton titleButton={'set'}
                               changeValue={set}
                               value={valueSetting}/>

            </div>

        </div>


    </div>

    )
}

