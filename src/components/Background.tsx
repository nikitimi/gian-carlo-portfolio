import { useAppSelector } from '~/redux/hooks'

const Background = (props: any) => {
    const darkmode = useAppSelector((state) => state.ui.darkmode)
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
