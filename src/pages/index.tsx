import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { Background, Header, SEO } from '~/components'

const Main = () => {
    const works: {
        label: string
        href: string
    }[] = [
        {
            label: 'Foodie Blog',
            href: 'https://foodie-blog.vercel.app/',
        },
        {
            label: 'Questionnaire',
            href: 'https://next-genetics.vercel.app/',
        },
        {
            label: 'Resume',
            href: 'https://gian-carlo.vercel.app/',
        },
    ]
    const techstack = [
        'VS Code',
        'Terminal',
        'Github',
        'Firebase',
        'NodeJS',
        'ReactJS',
        'ThreeJS',
        'NextJS',
        'p5JS',
        'Express',
        'TailwindCSS',
        'MUI',
        'SCSS/SASS',
        'Android Studio',
    ]
    const composers = [
        'Ludwig van Beethoven',
        'Niccolò Paganini',
        'Franz Liszt',
        'Frédéric François Chopin',
        'Sergei Vasilyevich Rachmaninoff',
        'Claude Debussy',
        'Francisco Buencamino Sr.',
        'Shaun Choo',
    ]
    const DIMENSION = 120

    return (
        <main className="grid gap-2 bg-white duration-300 ease-in-out dark:bg-black dark:text-white">
            <section className="relative isolate bg-slate-300 px-20 after:absolute after:inset-0 after:-z-20 after:-skew-y-6 after:bg-gradient-to-tr after:from-violet-syntexia after:to-violet-syntexia dark:bg-blue-syntexia dark:after:from-violet-syntexia dark:after:to-green-syntexia">
                <div className="mx-auto max-w-3xl px-4 duration-300">
                    <h1 className="m-4 text-4xl font-bold text-slate-300 dark:text-green-syntexia sm:text-5xl xl:text-6xl">
                        Gian Carlo Carranza
                    </h1>
                    <h6 className="mb-8 text-lg font-bold text-slate-300 dark:text-green-syntexia sm:text-xl xl:text-3xl">
                        Web Developer | Musician
                    </h6>
                    <div className="rounded-full">
                        <Image
                            draggable={false}
                            // className="rounded-full"
                            src="/avatar.jpg"
                            alt=""
                            width={DIMENSION}
                            height={DIMENSION}
                            layout="intrinsic"
                        />
                    </div>
                    <h2 className="m-4 text-base font-semibold text-slate-300 dark:text-green-syntexia sm:text-lg xl:text-2xl">
                        Hello there! My name is Gian Carlo, nice to meet you!
                    </h2>
                    <h6 className="text-sm font-normal text-slate-300 dark:text-white sm:text-base xl:text-xl">
                        I&apos;m a passionate programmer most of the time,
                        musician in free time. I&apos;m aspiring to contribute
                        to the IT industry and to my future clients hence
                        I&apos;m eagerly learning new web trends and technology.
                    </h6>
                </div>
            </section>
            <section className="px-20">
                <div className="mx-auto max-w-3xl px-4 duration-300">
                    <h2 className="m-4 text-base font-semibold  text-slate-300 dark:text-green-syntexia sm:text-lg xl:text-2xl">
                        Web Developer
                    </h2>
                    <h6 className="my-8 rounded-xl bg-slate-300 bg-blue-syntexia/80 p-2 text-sm font-semibold dark:bg-white/80 dark:text-violet-syntexia sm:text-base xl:text-xl">
                        Languages I speak:
                    </h6>
                    <h6 className="text-sm font-normal text-slate-300 dark:text-white sm:text-base xl:text-xl">
                        HTML, CSS, Javascript, PHP, Java
                    </h6>
                    <h6 className="my-8 rounded-xl bg-slate-300 bg-blue-syntexia/80 p-2 text-sm font-semibold dark:bg-white/80 dark:text-violet-syntexia sm:text-base xl:text-xl">
                        Tools, Libraries, &amp; Frameworks I have used in the
                        past:
                    </h6>
                    <ul className="flex flex-col gap-2 text-sm font-light sm:text-base xl:text-lg">
                        {techstack.map((value) => (
                            <li key={value}>{value}</li>
                        ))}
                    </ul>
                </div>
            </section>
            <section className="wavy px-20">
                <div className="mx-auto max-w-3xl px-4 duration-300">
                    <h2 className="m-4 text-base font-semibold  text-slate-300 dark:text-green-syntexia sm:text-lg xl:text-2xl">
                        Musician
                    </h2>
                    <h6 className="text-sm font-normal text-slate-300 dark:text-white sm:text-base xl:text-xl">
                        Self taught and classical music enthusiast
                    </h6>
                    <h6 className="my-8 rounded-xl bg-slate-300 bg-blue-syntexia/80 p-2 text-sm font-semibold dark:bg-white/80 dark:text-violet-syntexia sm:text-base xl:text-xl">
                        My go to composers:
                    </h6>
                    <ul className="flex flex-col gap-2 text-sm font-light sm:text-base xl:text-lg">
                        {composers.map((value) => (
                            <li key={value}>{value}</li>
                        ))}
                    </ul>
                    <h6 className="my-8 rounded-xl bg-slate-300 bg-blue-syntexia/80 p-2 text-sm font-semibold dark:bg-white/80 dark:text-violet-syntexia sm:text-base xl:text-xl">
                        My all-time favorite pieces
                    </h6>
                    <h6 className="text-sm font-normal text-slate-300 dark:text-white sm:text-base xl:text-xl">
                        Ballade No 1 in G Minor Op 23, Debussy - Reverie,
                        Transcendental Etude No.8, Rachmaninoff/Kreisler -
                        Liebesleid, Caprice No. 24 in A minor
                    </h6>
                </div>
            </section>
            <section className="px-20">
                <div className="mx-auto max-w-3xl px-4 duration-300">
                    <h2 className="m-4 text-base font-semibold  text-slate-300 dark:text-green-syntexia sm:text-lg xl:text-2xl">
                        Recent Works:
                    </h2>
                    <ul className="flex flex-col gap-2 text-sm font-light sm:text-base xl:text-lg">
                        {works.map(({ label, href }, I: number) => (
                            <li
                                key={I}
                                className="underline hover:animate-bounce"
                            >
                                <Link href={href} passHref>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <h2 className="my-8 rounded-xl bg-slate-300 bg-blue-syntexia/80 p-2 text-sm font-semibold dark:bg-white/80 dark:text-violet-syntexia sm:text-base xl:text-xl">
                        Upgrade in Portfolio coming soon...
                    </h2>
                </div>
            </section>
        </main>
    )
}
const Index = () => {
    const observer = useRef<IntersectionObserver | null>()

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
    }, [])

    return (
        <Background>
            <SEO
                title="Gian Carlo"
                description="Hey! welcome to my Portfolio~"
            />
            <Header />
            <Main />
            <DynamicFooter />
        </Background>
    )
}

export default Index
