import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '~/redux/hooks'
import { getUI, setTheme } from '~/redux/reducers/uiReducer'

function randMinMax(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const Background = (props: any) => {
    const dispatch = useAppDispatch()
    const darkmode = useAppSelector((state) => state.ui.darkmode)

    useEffect(() => {
        dispatch(getUI('darkmode'))
    }, [dispatch])
    const baseStyle = 'duration-300 ease-in-out h-full'

    return (
        <div
            className={
                darkmode
                    ? `dark bg-white dark:bg-black dark:text-white ${baseStyle}`
                    : baseStyle
            }
        >
            <div className="fixed inset-0 translate-x-1/2 translate-y-1/2 select-none text-transparent dark:text-white">
                <Stars className="animate-spin-forever-four" />
                <Stars className="animate-spin-forever-four" />
                <Stars className="rotate-90 animate-spin-forever-one" />
                <Stars className="-rotate-90 animate-spin-forever-two" />
                <Stars className="rotate-180 animate-spin-forever-four" />
                <Stars className="-rotate-180 animate-spin-forever-three" />
                <Stars className="rotate-90" />
                <Stars className="-rotate-90" />
                <Stars className="rotate-120" />
                <Stars className="rotate-180" />
                <Stars className="-rotate-180" />
                <Stars className="-rotate-120" />
            </div>
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

const Stars = ({ className }: { className?: string }) => {
    const translateList = [
        '',
        '-translate-x-1',
        '-translate-x-2',
        '-translate-x-3',
        '-translate-x-4',
        '-translate-x-1/2',
        '-translate-x-2/3',
        '-translate-x-3/5',
        'translate-x-1',
        'translate-x-2',
        'translate-x-3',
        'translate-x-4',
        'translate-x-5',
        'translate-x-6',
        'translate-x-1/2',
        'translate-x-1/3',
        'translate-x-2/3',
    ]
    const durationList = [
        '',
        'duration-100',
        'duration-200',
        'duration-300',
        'duration-400',
        'duration-500',
        'duration-1000',
    ]
    const textStars = new Array(5).fill('.')
    const containerStyles = [
        'absolute rotate-90',
        'absolute text-xl',
        'absolute -rotate-90 text-xs',
        'absolute text-xs',
        'absolute text-sm',
    ]
    return (
        <div className={`${className ? className : ''} absolute`}>
            {containerStyles.map((cStyles) => {
                return (
                    <div key={cStyles} className={cStyles}>
                        {textStars.map((v, i) => {
                            let styles = 'animate-pulse'
                            styles += ` ${
                                translateList[
                                    randMinMax(0, translateList.length - 1)
                                ]
                            }`
                            styles += ` ${
                                durationList[
                                    randMinMax(0, durationList.length - 1)
                                ]
                            }`

                            return (
                                <p className={styles} key={i}>
                                    {v}
                                </p>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Background
