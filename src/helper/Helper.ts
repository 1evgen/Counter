
type titleButtonType = 'inc' | 'reset' | 'set'

export const isDisabled = (titleButton: titleButtonType, value: number | string, maxValue: number, startValue: number )=>{
    if(titleButton === 'inc') {
        return value === maxValue
    } else if(titleButton === 'set'){
        return maxValue <= startValue || startValue < 0
    } else {
        return value === startValue;
    }
}