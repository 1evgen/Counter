import { legacy_createStore, combineReducers } from "redux";
import {counterReducer} from "./counterReducer";

export const rootReducer = combineReducers({
    count: counterReducer
})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>