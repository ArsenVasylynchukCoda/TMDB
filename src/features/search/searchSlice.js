import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: '',
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        reset: (state) => {
            state.value = ''
        },
        setByValue: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { reset, setByValue} = searchSlice.actions

export default searchSlice.reducer