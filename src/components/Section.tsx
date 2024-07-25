import Image from 'next/image'
import { useRef } from 'react'
import { type SectionType } from '~/lib/_index'
import { type BaseComposerType } from '~/lib/musician'
import { type DevIconType, processDevIconToUrl } from '~/lib/web'
import {
    addRemoveClassesToElement,
    spreadStringClasses,
} from '~/utils/classNames'
import { DIMENSION } from '~/utils/images'

const Section = (props: SectionType) => {
    const { sectionTitle, sectionItems, isWavy } = props

    return (
        <section>
            <div className={`${isWavy ? 'wavy' : ''} py-10`}>
                <div className="mx-auto max-w-3xl p-4">
                    <h2
                        className={`${
                            isWavy ? 'text-slate-300' : 'text-black'
                        } m-4 text-3xl font-bold dark:text-green-syntexia`}
                    >
                        {sectionTitle}
                    </h2>
                    {sectionItems.map(({ title, value }) => (
                        <SectionValueRenderer
                            key={title}
                            title={title}
                            value={value}
                            isWavy={isWavy === undefined ? false : isWavy}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

type SectionValuePropsType = SectionType['sectionItems'][number]['value']

const SectionValueRenderer = (props: {
    isWavy: boolean
    title: string
    value: SectionValuePropsType
}) => {
    const { isWavy, title, value } = props
    const composerKeyLength = 4
    const devIconKeyLength = 2
    const iconUlClasses = 'grid-cols-6 lg:grid-cols-10'
    const ulClasses =
        'grid gap-2 duration-300 ease-in-out' +
        (Object.keys(value[0]).includes('type') ? ` ${iconUlClasses}` : '')

    function handleSortValue(
        a: SectionValuePropsType[number],
        b: SectionValuePropsType[number]
    ) {
        return a.name < b.name ? -1 : 1
    }

    return (
        <div>
            <h6 className="my-8 rounded-xl bg-blue-syntexia/80 bg-slate-300 p-4 font-semibold shadow-sm dark:bg-white/80 dark:text-violet-syntexia">
                {`${title}: `}
            </h6>
            <ul className={ulClasses}>
                {value.sort(handleSortValue).map((value, index) => {
                    const keys = Object.keys(value)

                    switch (keys.length) {
                        case composerKeyLength:
                        case composerKeyLength + 1:
                            return (
                                <ComposerRenderer
                                    key={index}
                                    {...(value as BaseComposerType)}
                                />
                            )
                        case devIconKeyLength:
                            return (
                                <DevIconRenderer
                                    key={index}
                                    isWavy={isWavy}
                                    {...(value as DevIconType)}
                                />
                            )
                        default:
                            return (
                                <div key={index}>
                                    <p>default</p>
                                </div>
                            )
                    }
                })}
            </ul>
        </div>
    )
}

const ComposerRenderer = (props: BaseComposerType) => {
    const { name, nationality, born, died, pieces } = props
    const liClasses = 'text-slate-300 dark:text-white/80'
    const baseClasses = 'duration-300 ease-in-out w-full text-start'
    const activeClasses = 'h-64 bg-blue-syntexia/20 rounded-xl'
    const inactiveClasses = 'h-full bg-transparent text-start'

    function handleMouseEvent<T extends HTMLElement>(props: {
        e: React.MouseEvent<T>
        activeClasses: string
        inactiveClasses: string
        activeAdditionalCallback?: (event: React.MouseEvent<T>) => any
        inactiveAdditionalCallback?: (event: React.MouseEvent<T>) => any
    }) {
        const {
            e,
            activeClasses,
            inactiveClasses,
            activeAdditionalCallback,
            inactiveAdditionalCallback,
        } = props
        const mouseleave = 'mouseleave'
        const mouseenter = 'mouseenter'
        const element = e.currentTarget as T

        switch (e.type) {
            case mouseenter:
                activeAdditionalCallback && activeAdditionalCallback(e)
                return addRemoveClassesToElement(
                    activeClasses,
                    inactiveClasses,
                    element
                )
            case mouseleave:
                inactiveAdditionalCallback && inactiveAdditionalCallback(e)
                return addRemoveClassesToElement(
                    inactiveClasses,
                    activeClasses,
                    element
                )
            default:
                return console.log(e.type)
        }
    }

    const activeCallbackClasses = 'opacity-100 bg-red-400'
    const inactiveCallbackClasses = 'opacity-0 absolute'
    function activeAdditionalCallback(e: React.MouseEvent<HTMLButtonElement>) {
        const button = e.currentTarget as HTMLButtonElement
        button.querySelectorAll('p').forEach((paragraph) => {
            paragraph.classList.remove(
                ...spreadStringClasses(inactiveCallbackClasses)
            )
            paragraph.classList.add(
                ...spreadStringClasses(activeCallbackClasses)
            )
        })
    }
    function inactiveAdditionalCallback(
        e: React.MouseEvent<HTMLButtonElement>
    ) {
        const button = e.currentTarget as HTMLButtonElement
        button.querySelectorAll('p').forEach((paragraph) => {
            paragraph.classList.remove(
                ...spreadStringClasses(activeCallbackClasses)
            )
            paragraph.classList.add(
                ...spreadStringClasses(inactiveCallbackClasses)
            )
        })
    }

    return (
        <li className={liClasses}>
            <button
                className={baseClasses}
                onMouseEnter={(e) =>
                    handleMouseEvent({
                        e,
                        activeClasses,
                        inactiveClasses,
                        activeAdditionalCallback,
                        inactiveAdditionalCallback,
                    })
                }
                onMouseLeave={(e) =>
                    handleMouseEvent({ e, activeClasses, inactiveClasses })
                }
            >
                <h2>{name}</h2>
                <p className="absolute opacity-0 duration-300 ease-in-out">
                    Born:<span>{born.date.toDateString().slice(3)}</span>
                </p>
                {died && (
                    <p className="absolute opacity-0 duration-300 ease-in-out">
                        Died:<span>{died.date.toDateString().slice(3)}</span>
                    </p>
                )}
            </button>
        </li>
    )
}

const DevIconRenderer = (props: DevIconType & { isWavy: boolean }) => {
    const isIconStyle = `${
        props.isWavy ? 'bg-slate-300' : ''
    } w-fit overflow-hidden rounded-full hover:scale-105 dark:bg-white/80`
    const buttonRef = useRef<HTMLButtonElement>(null!)

    function handleMouseEnter(e: React.MouseEvent<HTMLButtonElement>) {
        const button: HTMLButtonElement = e.currentTarget
        const buttonName =
            (button.childNodes[0] as HTMLImageElement).getAttribute('alt') ??
            'imageAltName'
        const spanClasses =
            'absolute capitalize bg-black/90 text-[.5rem] inset-0 flex items-center justify-center rounded-full text-white dark:text-green-syntexia'
        const span = Object.assign(document.createElement('span'), {
            className: spanClasses,
            textContent: buttonName,
        })

        button.setAttribute('aria-expanded', 'true')
        button.appendChild(span)
    }
    function handleMouseLeave(e: React.MouseEvent<HTMLButtonElement>) {
        const button: HTMLButtonElement = e.currentTarget
        const spanElements = button.querySelectorAll('span')

        button.removeAttribute('aria-expanded')
        spanElements.forEach((span) => span.remove())
    }
    const { name } = props
    const iconUrl = processDevIconToUrl(props)

    return (
        <li className={isIconStyle}>
            <button
                ref={buttonRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative h-12 w-12 p-2"
            >
                <Image
                    src={iconUrl}
                    alt={name
                        .replace(/[0-9]*/g, '')
                        .replace('Dot-', '.')
                        .replace('sharp', '#')}
                    sizes={`${DIMENSION.icon}x${DIMENSION.icon}`}
                    width={DIMENSION.icon}
                    height={DIMENSION.icon}
                />
            </button>
        </li>
    )
}

export { Section }
