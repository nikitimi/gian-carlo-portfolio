import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { useAppDispatch } from '~/redux/hooks'
import { getUI } from '~/redux/reducers/uiReducer'
import store from '~/redux/store'
import '~/styles/globals.css'

function MyApp(props: AppProps) {
    return (
        <Provider store={store}>
            <InitApp {...props} />
        </Provider>
    )
}

const InitApp = ({ Component, pageProps }: AppProps) => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getUI())
    }, [])
    return <Component {...pageProps} />
}

export default MyApp
