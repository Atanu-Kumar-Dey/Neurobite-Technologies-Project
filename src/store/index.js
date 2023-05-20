import { configureStore } from '@reduxjs/toolkit'
import counter from './stateSlice'
import data from './jsonDataSlice'
import array from './arraySlice'
export const store = configureStore({
    reducer: {
        counter,
        data,
        array
    },
})