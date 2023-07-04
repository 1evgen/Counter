import {counterReducer, incrementValueAC, initialStateType, resetValueAC} from "./counterReducer";

// let initialState: initialStateType;
//
// beforeEach(()=> {
//     initialState = {
//         value: 0,
//         startValue: 0,
//         maxValue: 0
//     }
// })

test('test increment value for one', ()=> {
    let initialState = {value: 0, reset: 0, startValue: 0, maxValue: 0}
    let result = counterReducer(initialState, incrementValueAC())

    expect(result.value).toBe(1)
    expect(result.startValue).toBe(0)

})

test('test reset value', ()=> {
    let initialState = {value: 10, startValue: 0, maxValue: 0}
    let result = counterReducer(initialState, resetValueAC())

    expect(result.value).toEqual(0)
})

//
// test('set value', ()=> {
//     let initialState = {value: 10, startValue: 4, maxValue: 10}
//     let result = counterReducer(initialState, setValueInSettingAC())
//     expect(result.maxValue).toBe(10)
//     expect(result.startValue).toBe(4)
// })