
import s from './CounterButtons.module.css'


type typeForButton = {
    titleButton: string
    changeValue: ()=> void
    value?: number | string
    maxValue: number
    startValue: number
}


 export const  CounterButton =(props: typeForButton)=> {
     const blockButtonInc = props.titleButton === 'inc' && props.value === props.maxValue
     const blockButtonReset = props.titleButton === 'reset' && props.value === 0
     const settingInError = props.maxValue <= props.startValue || props.startValue < 0 || props.maxValue < 0
     const isDisabled = (blockButtonInc || blockButtonReset || settingInError)

    return (
        <button onClick={props.changeValue}
                className={s.styleButtons}
                disabled={isDisabled}

        >{props.titleButton}</button>

    )
}