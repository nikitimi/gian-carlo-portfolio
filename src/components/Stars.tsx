'use client'

function randMinMax(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const translateList = [
    '',
    '-translate-x-1',
    '-translate-x-2',
    '-translate-x-3',
    '-translate-x-4',
    '-translate-x-1/2',
    '-translate-x-2/3',
    '-translate-x-3/5',
    '-translate-x-5',
    '-translate-x-6',
    '-translate-y-1',
    '-translate-y-2',
    '-translate-y-3',
    '-translate-y-4',
    '-translate-x-1',
    '-translate-x-2',
    '-translate-x-3',
    '-translate-x-4',
    '-translate-x-1/2',
    '-translate-x-2/3',
    '-translate-x-3/5',
    '-translate-x-5',
    '-translate-x-6',
    '-translate-y-1',
    '-translate-y-2',
    '-translate-y-3',
    '-translate-y-4',
    'translate-x-1',
    'translate-x-2',
    'translate-x-3',
    'translate-x-4',
    'translate-x-5',
    'translate-x-6',
    'translate-x-1/2',
    'translate-x-1/3',
    'translate-x-2/3',
    'translate-x-1',
    'translate-x-2',
    'translate-x-3',
    'translate-x-4',
    'translate-x-5',
    'translate-x-6',
    'translate-x-1/2',
    'translate-x-1/3',
    'translate-x-2/3',
    'translate-y-1',
    'translate-y-2',
    'translate-y-3',
    'translate-y-4',
    'translate-y-5',
    'translate-y-6',
]
const durationList = [
    '',
    'duration-100',
    'duration-200',
    'duration-300',
    'duration-400',
    'duration-500',
    'duration-100',
    'duration-200',
    'duration-300',
    'duration-400',
    'duration-500',
    'duration-100',
    'duration-400',
    'duration-500',
    'duration-1000',
    'duration-2000',
    'duration-3000',
    'duration-1000',
    'duration-2000',
    'duration-3000',
    'duration-1000',
    'duration-2000',
    'duration-3000',
    'duration-1000',
    'duration-2000',
    'duration-3000',
]
const containerStyles = [
    'absolute rotate-90',
    'absolute',
    'absolute -rotate-90',
    'absolute',
    'absolute',
]
const rotateList = [
    '',
    'rotate-90',
    '-rotate-90',
    'rotate-180',
    '-rotate-180',
    'rotate-270',
    '-rotate-270',
    'rotate-45',
    '-rotate-45',
]
const textSizeList = ['text-xs', 'text-sm', 'text-base']

const MiniStars = ({ className }: { className?: string }) => {
    const textStars = new Array(7).fill('.')

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

const Stars = () => {
    function randomClassNames() {
        let baseStyle = 'absolute'
        baseStyle += ` ${rotateList[randMinMax(0, rotateList.length - 1)]}`
        baseStyle += ` ${textSizeList[randMinMax(0, textSizeList.length - 1)]}`
        return baseStyle
    }

    return (
        <div className="fixed inset-0 h-screen scale-150 select-none bg-black text-transparent text-white ">
            .
            <div className="relative translate-x-1/2 translate-y-64">
                <MiniStars className={randomClassNames()} />
                <MiniStars className={randomClassNames()} />
                <MiniStars className={randomClassNames()} />
                <MiniStars className={randomClassNames()} />
                <MiniStars className={randomClassNames()} />
                <MiniStars className={randomClassNames()} />
                <MiniStars className={randomClassNames()} />
                <MiniStars className={randomClassNames()} />
                <MiniStars className={randomClassNames()} />
                <MiniStars className={randomClassNames()} />
                <MiniStars className={randomClassNames()} />
                <MiniStars className={randomClassNames()} />
            </div>
        </div>
    )
}

export default Stars
