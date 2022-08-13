import { createSlice } from "@reduxjs/toolkit";

const global = createSlice({
    name: 'global',
    initialState: {},
    reducers: {
        doSomething: (state, payload) => {
            return state
        }
    }
})

export const {doSomething} = global.actions

export default global.reducer
