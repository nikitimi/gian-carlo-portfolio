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

const darkmodeName = 'darkmode'

export const ui = createSlice({
    name: 'ui',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setTheme: (state, action: PayloadAction<string>) => {
            console.log(action.payload)
            state.darkmode = JSON.parse(action.payload)
            localStorage.setItem(darkmodeName, action.payload)
        },
        getUI: (state) => {
            const darkmodeContainer = localStorage.getItem(darkmodeName)
            if (darkmodeContainer)
                state.darkmode = JSON.parse(darkmodeContainer)
            else localStorage.setItem(darkmodeName, 'true')
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
