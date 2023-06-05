
import s from './CounterButtons.module.css'



type typeForButton = {
    titleButton: string
    changeValue: ()=> void
    value: number
}


 export const  CounterButton =(props: typeForButton)=> {
    const blockButtonInc = props.titleButton === 'inc' && props.value === 5
     const blockButtonReset = props.titleButton === 'reset' && props.value === 0
     const isDisabled = (blockButtonInc || blockButtonReset)

    return (
        <button onClick={props.changeValue}
                className={s.styleButtons}
                disabled={isDisabled}
        >{props.titleButton}</button>


    )
}