import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    array: [],
}

export const arraySlice = createSlice({
    name: 'array',
    initialState,
    reducers: {
        setArray: (state, action) => {
            const arr = action.payload
            console.log(arr + "payload")
            state.array = [...state.array, arr]
        }
    },
})

// Action creators are generated for each case reducer function
export const { setArray } = arraySlice.actions

export default arraySlice.reducer