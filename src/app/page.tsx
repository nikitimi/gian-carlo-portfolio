'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Background, Header, Loading } from '~/components'
import { type SectionType, web, musician } from '~/app/lib/_index'
import { type DevIconType, processDevIconToUrl } from './lib/devIcons'
import '~/app/globals.css'

const DIMENSION = 120

const Section = (props: SectionType) => {
    const buttonRef = useRef<HTMLButtonElement | null>(null)
    const { sectionTitle, sectionItems, wavy } = props

    function handleMouseEnter(e: React.MouseEvent<HTMLButtonElement>) {
        const button: HTMLButtonElement = e.currentTarget
        const buttonName =
            (button.childNodes[0] as HTMLImageElement).getAttribute('alt') ??
            'imageAltName'
        const span = Object.assign(document.createElement('span'), {
            className:
                'absolute bg-black/90 text-[.5rem] inset-0 flex items-center justify-center rounded-full text-white dark:text-green-syntexia',
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
        <section className="">
            <div className={`${wavy ? 'wavy' : ''} py-20`}>
                <div className="mx-auto max-w-3xl p-4">
                    <h2
                        className={`${
                            wavy ? 'text-slate-300' : 'text-black'
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
                                                wavy ? 'bg-slate-300' : ''
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
                                                                width={
                                                                    DIMENSION *
                                                                    0.5
                                                                }
                                                                height={
                                                                    DIMENSION *
                                                                    0.5
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

const Main = () => (
    <main>
        <div className="grid bg-white duration-300 ease-in-out dark:bg-black dark:text-white">
            <div className="overflow-hidden rounded-full bg-green-400">
                <section className="fixed inset-0 translate-y-1/3 scale-125 select-none ease-in-out md:translate-y-1">
                    <Image
                        unoptimized
                        draggable={false}
                        priority
                        src="/stars/2.gif"
                        alt=""
                        width={120}
                        height={120}
                        className="-z-10 w-full animate-spin-forever opacity-0 dark:opacity-100 md:h-full"
                    />
                </section>
            </div>
            <section className="h-screen">
                <div className="relative isolate grid translate-y-1/2 grid-cols-2 bg-slate-300 py-20 duration-300 ease-in-out after:absolute after:inset-0 after:-z-20 after:-skew-y-6 after:bg-gradient-to-tr after:from-violet-syntexia after:to-violet-syntexia dark:bg-blue-syntexia dark:after:from-violet-syntexia dark:after:to-green-syntexia">
                    <div className="flex flex-col gap-6 self-end p-8">
                        <h1 className="w-max text-2xl font-bold text-slate-300 duration-300 ease-in-out dark:text-green-syntexia sm:text-3xl lg:text-5xl">
                            Full-Stack Developer
                        </h1>
                        <p className="text-sm text-slate-300 dark:text-white sm:text-base">
                            Hello there! My name is
                            <span className="text-sm font-semibold text-slate-300 duration-300 ease-in-out dark:text-green-syntexia sm:text-base">
                                {` Gian Carlo Carranza, `}
                            </span>
                            A passionate Developer based in the Philippines. 📍
                        </p>
                    </div>
                    <div className="relative self-center justify-self-center overflow-hidden rounded-full border-4 border-black">
                        <Image
                            priority
                            draggable={false}
                            src="/avatar.jpg"
                            alt=""
                            width={DIMENSION * 2}
                            height={DIMENSION * 2}
                        />
                    </div>
                </div>
            </section>
            <Section {...web} />
            <Section {...musician} />
            <Loading />
        </div>
    </main>
)

const Index = () => {
    const observer = useRef<IntersectionObserver | null>()
    const [num] = useState(1)

    const DynamicFooter = dynamic(() => import('~/components/Footer'), {
        loading: () => <p>Loading</p>,
    })

    useEffect(() => {
        let unsub = true
        function initializeObserver() {
            observer.current = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        const classList = [
                            'opacity-100',
                            'blur-none',
                            'translate-x-0',
                        ]
                        if (entry.isIntersecting)
                            return classList.forEach((className) =>
                                entry.target.classList.add(className)
                            )
                        classList.forEach((className) =>
                            entry.target.classList.remove(className)
                        )
                    })
                },
                {
                    root: document.querySelector('#scrollArea'),
                    rootMargin: '0px',
                    threshold: 0.4,
                }
            )
            const hiddenElements = document.querySelectorAll('section')
            hiddenElements.forEach((el) => observer.current?.observe(el))
        }
        if (unsub) {
            initializeObserver()
        }
        return () => {
            unsub = false
        }
    }, [num])

    return (
        <Background>
            <Header />
            <Main />
            <DynamicFooter />
        </Background>
    )
}

export default Index
