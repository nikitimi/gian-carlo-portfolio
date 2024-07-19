'use client'

import React from 'react'
import { Background, Header, Loading } from '~/components'
import GalaxyThree from '~/components/GalaxyThree'

const Projects = () => {
    return (
        <Background>
            <Header />
            <GalaxyThree>
                <Loading />
            </GalaxyThree>
        </Background>
    )
}

export default Projects
