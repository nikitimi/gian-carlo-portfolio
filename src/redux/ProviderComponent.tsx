'use client'

import { Analytics } from '@vercel/analytics/react'
// import { AppProps } from 'next/app'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { useAppDispatch } from './hooks'
import { getUI } from './reducers/uiReducer'

type RootLayoutProps = {
    children: React.ReactNode
}

function ProviderComponent(props: RootLayoutProps) {
    return (
        <Provider store={store}>
            <App {...props} />
            <Analytics />
        </Provider>
    )
}

const App = ({ children }: RootLayoutProps) => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        console.log('first')
        dispatch(getUI())
    }, [dispatch])

    return <>{children}</>
}

export default ProviderComponent
