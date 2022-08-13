import { configureStore } from '@reduxjs/toolkit'

import global from './reducers/global.reducer'


const store = configureStore({
    reducer: {
        global
    }
})

export default store
