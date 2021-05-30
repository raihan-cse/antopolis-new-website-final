import React from 'react'
import AnimatedCount from './AnimatedCount'
import Clients from './Clients'
import DigitalExperience from './DigitalExperience'
import GreatTogether from './GreatTogether'
import Hero from './Hero'
import Portfolio from './Portfolio'
// import Testport from './Testport'

export default function Home() {
    return (
        <>
            <Hero />
            <DigitalExperience />
            <Portfolio />
            {/* <Testport /> */}
            <Clients />
            <AnimatedCount />
            <GreatTogether />
        </>
    )
}
