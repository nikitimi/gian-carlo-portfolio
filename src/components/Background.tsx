import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '~/redux/hooks'
import { getUI, setTheme } from '~/redux/reducers/uiReducer'

const Background = (props: any) => {
    const dispatch = useAppDispatch()
    const darkmode = useAppSelector((state) => state.ui.darkmode)

    useEffect(() => {
        dispatch(getUI('darkmode'))
    }, [dispatch])
    const baseStyle =
        'h-screen duration-300 ease-in-out min-h-screen duration-300 ease-in-out'

    return (
        <div
            className={
                darkmode
                    ? `dark bg-white duration-300 ease-in-out dark:bg-black dark:text-white ${baseStyle}`
                    : baseStyle
            }
        >
            {props.children}
            <button
                className="fixed bottom-10 right-10 rounded-xl border-2 border-[#120a3d] bg-[#120a3d] p-2 capitalize text-white"
                onClick={() => dispatch(setTheme(JSON.stringify(!darkmode)))}
            >
                {darkmode ? 'dark' : 'light'}
            </button>
        </div>
    )
}

export default Background
