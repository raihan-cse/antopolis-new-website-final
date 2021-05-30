import React from 'react'
import Scrollspy from 'react-scrollspy'
import Content from './fortfolio/Content'
import Tech from './fortfolio/Tech'
import Business from './fortfolio/Business'

export default function Portfolioo() {
    return (
        <>
            <section className="protfolio-section">
                <Business />
                <Tech />
                <Content />
                <Scrollspy
                    className="scrollspy" items={['business', 'tech', 'content']}
                    currentClassName="isCurrent">
                    <li><a href="#business">business</a></li>
                    <li><a href="#tech">tech</a></li>
                    <li><a href="#content">content</a></li>
                </Scrollspy>
            </section> 
        </>
    )
}
