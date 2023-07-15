import { configureStore } from '@reduxjs/toolkit'
import portfolioReducer from '~/redux/reducers/portfolioReducer'
import uiReducer from '~/redux/reducers/uiReducer'

const store = configureStore({
    reducer: {
        portfolio: portfolioReducer,
        ui: uiReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
