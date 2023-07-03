
type titleButtonType = 'inc' | 'reset' | 'set'

export const isDisabled = (titleButton: titleButtonType, value: number | string, maxValue: number, startValue: number )=>{
    if(titleButton === 'inc') {
        return value === maxValue
    } else if(titleButton === 'set'){
        return maxValue <= startValue
    } else {
        return value === startValue;
    }
}
