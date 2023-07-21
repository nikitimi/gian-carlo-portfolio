import Image from 'next/image'
import Link from 'next/link'
import { type ReactNode } from 'react'

type SocialDetailType = {
    href: string
    src: string
    alt: string
    delay?: string
}

const Footer = () => {
    const DIMENSION = 40
    const social: SocialDetailType[] = [
        {
            href: 'https://www.facebook.com/weepingpianist',
            src: '/facebook.png',
            alt: 'facebook',
        },
        {
            href: 'https://github.com/Resyntech',
            src: '/github.png',
            alt: 'github',
        },
        {
            href: 'https://www.youtube.com/@realsyntexia',
            src: '/youtube.png',
            alt: 'youtube',
        },
        {
            href: 'https://www.linkedin.com/in/giancarlo-carranza/',
            src: '/linkedin.png',
            alt: 'linkedin',
        },
    ]

    return (
        <footer className="relative flex flex-col items-center justify-center gap-2 bg-[#120a3d] p-4 text-white">
            <div>
                <Link
                    className="text-start text-xl underline"
                    href="mailto:carranzagcarlo@gmail.com"
                    passHref
                >
                    Contact Me
                </Link>
            </div>
            <div className="flex flex-col flex-wrap gap-2">
                <p className="text-center text-xl">Socials:</p>
                <nav className="flex flex-wrap items-center justify-center gap-4">
                    {social
                        .sort((a, b) => (a.alt >= b.alt ? 1 : -1))
                        .map(({ href, ...rest }, I: number) => (
                            <Link key={I} href={href} passHref>
                                <div className="h-full w-full rounded-full border bg-white text-white">
                                    <Image
                                        {...rest}
                                        alt=""
                                        width={DIMENSION}
                                        height={DIMENSION}
                                    />
                                </div>
                            </Link>
                        ))}
                </nav>
            </div>
        </footer>
    )
}

export default Footer
