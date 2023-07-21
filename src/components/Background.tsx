import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '~/redux/hooks'
import { getUI, setTheme } from '~/redux/reducers/uiReducer'

const Background = (props: any) => {
    const dispatch = useAppDispatch()
    const darkmode = useAppSelector((state) => state.ui.darkmode)

    useEffect(() => {
        dispatch(getUI('darkmode'))
    }, [dispatch])
    const baseStyle = 'h-full w-full'

    return (
        <div
            className={
                darkmode
                    ? `dark bg-white dark:bg-black dark:text-white ${baseStyle}`
                    : baseStyle
            }
        >
            {props.children}
        </div>
    )
}

export default Background
