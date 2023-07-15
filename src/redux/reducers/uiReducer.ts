import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '~/redux/store'

// Define a type for the slice state
interface UI {
    darkmode: boolean
}

// Define the initial state using that type
const initialState: UI = {
    darkmode: true,
}

const checkIfTrue = (props: string) => (props === 'true' ? true : false)

export const ui = createSlice({
    name: 'ui',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setTheme: (state, action: PayloadAction<string>) => {
            localStorage.setItem('darkmode', action.payload)
            state.darkmode = checkIfTrue(action.payload)
        },
        getUI: (state, action: PayloadAction<string>) => {
            const darkmode = localStorage.getItem(action.payload) || ''
            state.darkmode = checkIfTrue(darkmode)
        },
    },
})

export const { setTheme, getUI } = ui.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.joyice

// export const incrementAsync = (amount: number) => (dispatch: AppDispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount))
//   }, 1000)
// }

export default ui.reducer
