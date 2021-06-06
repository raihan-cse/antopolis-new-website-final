import React from 'react'
import AnimatedCount from './AnimatedCount'
import Clients from './Clients'
import DigitalExperience from './DigitalExperience'
import GreatTogether from './GreatTogether'
import Hero from './Hero'
import Portfolio from './Portfolio'

export default function Home() {
    return (
        <>
            <Hero />
            <DigitalExperience />
            <Portfolio />
            <Clients />
            <AnimatedCount />
            <GreatTogether />
        </>
    )
}
