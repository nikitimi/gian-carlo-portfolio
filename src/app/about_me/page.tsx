'use client'

import React, { useState } from 'react'
import { Section } from '~/components/Section'
import * as Lib from '~/lib/_index'

const AboutMe = () => {
    const values = ['musician', 'web']
    const [state, setState] = useState<Lib.SectionType>(Lib['musician'])

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        const button = e.currentTarget as HTMLButtonElement
        const buttonClasses = 'bg-green-syntexia'
        button.parentElement?.querySelectorAll('button').forEach((btn) => {
            btn.classList.remove(buttonClasses)
        })
        button.classList.add(buttonClasses)
        setState(
            Lib[button.textContent as 'musician' | 'web'] as Lib.SectionType
        )
    }

    return (
        <div>
            {values.map((meAsA) => {
                return (
                    <button key={meAsA} onClick={handleClick}>
                        {meAsA}
                    </button>
                )
            })}
            <Section {...state} />
        </div>
    )
}

export default AboutMe
