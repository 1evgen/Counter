
import s from './SupperInput.module.css'

type typeForSupperInput = {
    labelValue: string
}


export const SupperInput = (props: typeForSupperInput) => {
    return (
        <div className={s.wrapperForInput}>
            <label>{props.labelValue}</label>
            <input className={s.styleInput} type={"number"}  />
        </div>

    )


}


