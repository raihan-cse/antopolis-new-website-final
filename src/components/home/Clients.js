import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slide from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import AngleRight from '../../assets/images/angle-right.svg'

export default function Clients() {
    //settings for slide one
    const ssOne = {
        slidesToShow: 10,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
    }
    const ssTwo = {
        slidesToShow: 10,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        rtl: true,
        autoplaySpeed: 3000,
        speed: 2000,
    }
    const ssThree = {
        slidesToShow: 10,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
    }

    const slideData = [
        {
            id: '1',
            csLink: '#dmeo',
            imgUrl: '/assets/img/client/Toyota.png',
            imgAlt: 'Toyota'
        },
        {
            id: '2',
            csLink: '#dmeo',
            imgUrl: '/assets/img/client/Unilever.png',
            imgAlt: 'Unilever'
        },
        {
            id: '3',
            csLink: '#dmeo',
            imgUrl: '/assets/img/client/Aarong.png',
            imgAlt: 'Aarong'
        },
        {
            id: '4',
            csLink: '#dmeo',
            imgUrl: '/assets/img/client/ACI.png',
            imgAlt: 'ACI'
        },
        {
            id: '5',
            csLink: '#dmeo',
            imgUrl: '/assets/img/client/Airtel.png',
            imgAlt: 'Airtel'
        },
        {
            id: '6',
            csLink: '#dmeo',
            imgUrl: '/assets/img/client/Arla.png',
            imgAlt: 'Arla'
        },
        {
            id: '7',
            csLink: '#dmeo',
            imgUrl: '/assets/img/client/BK.png',
            imgAlt: 'BK'
        },
        {
            id: '8',
            csLink: '#dmeo',
            imgUrl: '/assets/img/client/BRAC.png',
            imgAlt: 'BRAC'
        },
        {
            id: '9',
            csLink: '#dmeo',
            imgUrl: '/assets/img/client/Nissan.png',
            imgAlt: 'Nissan'
        },
        {
            id: '10',
            csLink: '#dmeo',
            imgUrl: '/assets/img/client/PRAN.png',
            imgAlt: 'PRAN'
        },
        {
            id: '11',
            csLink: '#dmeo',
            imgUrl: '/assets/img/client/Toyota.png',
            imgAlt: 'Toyota'
        },
        {
            id: '12',
            csLink: '#dmeo',
            imgUrl: '/assets/img/client/Unilever.png',
            imgAlt: 'Unilever'
        },
    ]

    return (
        <>
            <section className="home-clients-section spb-100">
                <Container>
                    <Row>
                        <Col md={12} >
                            <div className="section-title-wrapper">
                                <div className="sc-title-box">
                                    <h1 className="sc-title">Clients we’ve worked with</h1>
                                </div>
                                <div className="sc-view-all-box">
                                    <a className="sc-view-all" href="#demo">
                                        <span>VIEW all clients</span>
                                        <span>
                                            <img src={AngleRight} alt="angle-right" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="px-0">
                <Slide {...ssOne}>
                        {slideData.map((sitem) =>
                            <div className="item" key={sitem.id}>
                                <div className="clients-logo">
                                    <a href={sitem.csLink} className="text-decoration-none text-reset">
                                        <img src={sitem.imgUrl} alt={sitem.imgAlt} className="ts" />
                                    </a>
                                </div>
                            </div>
                        )}
                    </Slide>
                    {/* slide two start */}
                    <Slide {...ssTwo} className="slide-rtl">
                        {slideData.map((sitem) =>
                            <div className="item" key={sitem.id}>
                                <div className="clients-logo">
                                    <a href={sitem.csLink} className="text-decoration-none text-reset">
                                        <img src={sitem.imgUrl} alt={sitem.imgAlt} className="ts" />
                                    </a>
                                </div>
                            </div>
                        )}
                    </Slide>
                    
                    {/* slide three start */}
                    <Slide {...ssThree}>
                        {slideData.map((sitem) =>
                            <div className="item" key={sitem.id}>
                                <div className="clients-logo">
                                    <a href={sitem.csLink} className="text-decoration-none text-reset">
                                        <img src={sitem.imgUrl} alt={sitem.imgAlt} className="ts" />
                                    </a>
                                </div>
                            </div>
                        )}
                    </Slide>


                    
                    {/* <Slide {...ssOne}>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Toyota.png'} alt="btcl" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Unilever.png'} alt="toyota" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Aarong.png'} alt="uniliver" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/ACI.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Airtel.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Arla.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/BK.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/BRAC.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Nissan.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/PRAN.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Toyota.png'} alt="btcl" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Unilever.png'} alt="toyota" className="ts" />
                                </a>
                            </div>
                        </div>
                    </Slide> */}

                    {/* slide two start */}
                    {/* <Slide {...ssTwo} className="slide-rtl">
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Toyota.png'} alt="btcl" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Unilever.png'} alt="toyota" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Aarong.png'} alt="uniliver" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/ACI.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Airtel.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Arla.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/BK.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/BRAC.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Nissan.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/PRAN.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Toyota.png'} alt="btcl" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Unilever.png'} alt="toyota" className="ts" />
                                </a>
                            </div>
                        </div>
                    </Slide> */}
                    
                    {/* slide three start */}
                    {/* <Slide {...ssThree}>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Toyota.png'} alt="btcl" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Unilever.png'} alt="toyota" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Aarong.png'} alt="uniliver" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/ACI.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Airtel.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Arla.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/BK.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/BRAC.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Nissan.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/PRAN.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Toyota.png'} alt="btcl" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Unilever.png'} alt="toyota" className="ts" />
                                </a>
                            </div>
                        </div> 
                    </Slide> */}
                </Container>
            </section>
        </>
    )
}
