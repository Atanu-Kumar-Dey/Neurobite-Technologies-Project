import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    channels: null,
    optionals: null
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (state, action) => {
            const { channels, optionals } = action.payload
            state.channels = channels
            state.optionals = optionals
        }
    },
})

// Action creators are generated for each case reducer function
export const { setData } = dataSlice.actions

export default dataSlice.reducer