import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AngleRight from '../../assets/images/angle-right.svg'

export default function DigitalExperience() {
    // const [dx, setDx] = useState({})

    // useEffect(() => {
    //     fetch('https://raw.githubusercontent.com/raihan-cse/antopolis-website-images/master/db.json/digitalExperience')
    //         .then(res => res.json())
    //         .then(data => setDx(data))
    // }, [])
    

    const dxdata = [
        {
            id: '1',
            imgUrl: '/assets/img/digital-exp/business.svg',
            imgAlt: 'Business Services',
            title: 'Business Services',
            descp: 'Webdesign (UI & UX) is our historical expertise. We’re constantly seeking to strike the right balance.'
        },
        {
            id: '2',
            imgUrl: '/assets/img/digital-exp/tech.svg',
            imgAlt: 'Techonological Solutions',
            title: 'Techonological Solutions',
            descp: 'Webdesign (UI & UX) is our historical expertise. We’re constantly seeking to strike the right balance.'
        },
        {
            id: '3',
            imgUrl: '/assets/img/digital-exp/content.svg',
            imgAlt: 'Content Developement',
            title: 'Content Developement',
            descp: 'Webdesign (UI & UX) is our historical expertise. We’re constantly seeking to strike the right balance.'
        }
    ]
    return (
        <>
            <section className="digital-experience-section spy-100">
                <Container>
                    <Row>
                        <Col md={12} >
                            <div className="section-title-wrapper">
                                <div className="sc-title-box">
                                    <h1 className="sc-title">We create next-level digital experiences</h1>
                                </div>
                                <div className="sc-view-all-box">
                                    <a className="sc-view-all" href="#demo">
                                        <span>VIEW OUR SERVICES</span>
                                        <span>
                                            <img src={AngleRight} alt="angle-right" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {dxdata.map((data) =>
                            <Col md={4} key={data.id}>
                                <div className="de-content-wrapper">
                                    <div className="img-box">
                                        <img className="img-fluid" src={data.imgUrl} alt={data.imgAlt} />
                                    </div>
                                    <div className="info-box">
                                        <h3 className="title">{data.title}</h3>
                                        <p className="text">{data.descp}</p>
                                    </div>
                                </div>
                            </Col>
                        )}
                    </Row>
                </Container>
            </section>
        </>
    )
}
