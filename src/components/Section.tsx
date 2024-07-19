import Image from 'next/image'
import { useRef } from 'react'
import { type SectionType } from '~/lib/_index'
import { type DevIconType, processDevIconToUrl } from '~/lib/devIcons'
import { DIMENSION } from '~/utils/images'

const Section = (props: SectionType) => {
    const buttonRef = useRef<HTMLButtonElement | null>(null)
    const { sectionTitle, sectionItems, isWavy } = props

    function handleMouseEnter(e: React.MouseEvent<HTMLButtonElement>) {
        const button: HTMLButtonElement = e.currentTarget
        const buttonName =
            (button.childNodes[0] as HTMLImageElement).getAttribute('alt') ??
            'imageAltName'
        const spanClasses =
            'absolute bg-black/90 text-[.5rem] inset-0 flex items-center justify-center rounded-full text-white dark:text-green-syntexia'
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
                    {sectionItems.map(({ title, value }) => {
                        const isIcon = Object.keys(value[0]).includes('type')
                        return (
                            <div key={title}>
                                <h6 className="my-8 rounded-xl bg-blue-syntexia/80 bg-slate-300 p-4 font-semibold shadow-sm dark:bg-white/80 dark:text-violet-syntexia">
                                    {`${title}: `}
                                </h6>
                                <ul
                                    className={`${
                                        isIcon
                                            ? 'grid-cols-6 lg:grid-cols-10'
                                            : ''
                                    } grid gap-2`}
                                >
                                    {value
                                        .sort((a, b) =>
                                            a.name < b.name ? -1 : 1
                                        )
                                        .map((props, index: number) => {
                                            const isIconStyle = `${
                                                isWavy ? 'bg-slate-300' : ''
                                            } w-fit overflow-hidden rounded-full hover:scale-105 dark:bg-white/80`
                                            const otherStyle = 'w-fit'
                                            const iconUrl = processDevIconToUrl(
                                                props as DevIconType
                                            )
                                            const keyLength =
                                                Object.keys(props).length
                                            const isKeysGreaterThanOne =
                                                keyLength > 1
                                            return (
                                                <li
                                                    className={
                                                        isKeysGreaterThanOne
                                                            ? isIconStyle
                                                            : otherStyle
                                                    }
                                                    key={index}
                                                >
                                                    {isKeysGreaterThanOne ? (
                                                        <button
                                                            ref={buttonRef}
                                                            onMouseEnter={
                                                                handleMouseEnter
                                                            }
                                                            onMouseLeave={
                                                                handleMouseLeave
                                                            }
                                                            className="relative h-12 w-12 p-2"
                                                        >
                                                            <Image
                                                                src={iconUrl}
                                                                alt={props.name}
                                                                sizes={`${DIMENSION.icon}x${DIMENSION.icon}`}
                                                                width={
                                                                    DIMENSION.icon
                                                                }
                                                                height={
                                                                    DIMENSION.icon
                                                                }
                                                            />
                                                        </button>
                                                    ) : (
                                                        <p className="text-slate-300 dark:text-white/80">
                                                            {props.name}
                                                        </p>
                                                    )}
                                                </li>
                                            )
                                        })}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export { Section }
