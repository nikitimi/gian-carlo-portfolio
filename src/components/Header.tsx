import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '~/redux/hooks'
import { setTheme } from '~/redux/reducers/uiReducer'

const Header = () => {
    const dimension = 80
    const darkmode = useAppSelector((state) => state.ui.darkmode)
    const dispatch = useAppDispatch()

    const handleThemeButton = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault()
        const input: HTMLInputElement = e.currentTarget
        const ariaCheckedName = 'aria-checked'
        const ariaChecked = input.getAttribute(ariaCheckedName)
        const span = input.parentElement?.lastElementChild

        dispatch(setTheme(JSON.stringify(!darkmode)))
        if (ariaChecked === 'true') {
            span?.setAttribute(ariaCheckedName, 'false')
            return input.setAttribute(ariaCheckedName, 'false')
        }
        span?.setAttribute(ariaCheckedName, 'true')
        input.setAttribute(ariaCheckedName, 'true')
    }

    return (
        <header className="fixed inset-x-0 z-10 flex items-center bg-white/90 p-6 duration-300 ease-in-out dark:bg-black/90 dark:text-white">
            <div className="flex h-10 w-10 items-center gap-1">
                <Image
                    draggable={false}
                    alt="Syntexia Logo"
                    src="/SyntexiaLogo.svg"
                    height={dimension}
                    width={dimension}
                />
                {/* <p className="dark:text-green-syntexia">yntexia</p> */}
            </div>
            <div className="absolute right-10 z-10 flex items-center gap-10">
                <div className="inline-block h-8 w-8">
                    <input
                        type="checkbox"
                        aria-checked="true"
                        className="absolute inset-0 z-10 rounded-xl border-2 border-[#120a3d] bg-[#120a3d] p-2 capitalize text-white opacity-0"
                        onClick={handleThemeButton}
                    />
                    <span
                        aria-checked="true"
                        className="absolute inset-0 -z-10 w-1/3 cursor-pointer rounded-full bg-slate-300 shadow-sm duration-300 ease-in-out before:absolute before:inset-y-0 before:z-10 before:w-8 before:rounded-full before:bg-white before:duration-300 before:ease-in-out aria-checked:bg-green-syntexia aria-checked:before:translate-x-6 aria-checked:before:animate-color-spin"
                    />
                </div>
                <p>Portfolio</p>
            </div>
        </header>
    )
}

export default Header
