'use client'

import React, { useState } from 'react'
import { Background, Header } from '~/components'
import GalaxyThree from '~/components/GalaxyThree'
import { Section } from '~/components/Section'
import * as Lib from '~/lib/_index'
import { classesArrayToString } from '~/utils/classNames'

type LibType = 'musician' | 'web'

const AboutMe = () => {
    const values = ['web', 'musician']
    const [state, setState] = useState<Lib.SectionType>(
        Lib[values[0] as LibType]
    )
    const activeButtonClasses = ['bg-green-syntexia', 'font-bold']
    const baseButtonClasses = [
        'capitalize',
        'p-2',
        'rounded-lg',
        'text-white-syntexia',
    ]

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        const button = e.currentTarget as HTMLButtonElement
        button.parentElement?.querySelectorAll('button').forEach((btn) => {
            btn.classList.remove(...activeButtonClasses)
        })
        button.classList.add(...activeButtonClasses)
        setState(Lib[button.textContent as LibType] as Lib.SectionType)
    }

    return (
        <Background>
            <Header />
            <GalaxyThree>
                <>
                    <div className="flex w-full items-center justify-center gap-2">
                        {values.map((meAsA, index) => {
                            const isFirstItem = index === 0
                            return (
                                <button
                                    className={`${isFirstItem ? classesArrayToString(...activeButtonClasses) : ''} ${classesArrayToString(
                                        ...baseButtonClasses
                                    )}`}
                                    key={meAsA}
                                    onClick={handleClick}
                                >
                                    {meAsA}
                                </button>
                            )
                        })}
                    </div>
                    <Section {...state} />
                </>
            </GalaxyThree>
        </Background>
    )
}

export default AboutMe
