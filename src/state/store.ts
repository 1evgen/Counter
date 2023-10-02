import { legacy_createStore, combineReducers } from "redux";
import {counterReducer} from "./counterReducer";
import {loadState, saveState, StateToSaveType} from "../utilits/localStorageUtilit";

export const rootReducer = combineReducers({
    count: counterReducer
})

const persistedState = loadState();

export const store = legacy_createStore(rootReducer, persistedState)
export type AppRootStateType = ReturnType<typeof rootReducer>


store.subscribe(() => {
    console.log('write in local storage')
    const stateToSave: StateToSaveType = {
        count : {
            value: store.getState().count.value,
            startValue: store.getState().count.startValue,
            maxValue: store.getState().count.maxValue
        }
    }
    saveState(stateToSave)
});
console.log(store.getState())