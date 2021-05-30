import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <>
            <section className="hero-section">
                <div className="logo-wrapper">
                    <Link path='/'>
                    <img src={process.env.PUBLIC_URL + '/assets/img/anto-logo-black.png'} alt="btcl" className="img-fluid" />
                    </Link>
                </div>
                <div className="container-wrapper">
                    <Container>
                        <div className="heading">
                            <h1 className="first">We are Antopolis</h1>
                            <h1 className="second">We empower changemakers.</h1>
                            {/* <h1 className="third">This website will be live soon!</h1> */}
                            <p>We’d love to work with you.  <br /> Just drop us a line below!</p>
                        </div>
                        <Row>
                            <Col sm={6} md={12} lg={12}>
                                <form id="form" noValidate >
                                    <div className="form-inline">
                                        <div className="form-group">
                                            <input type="text" className="form-control datalist" list="services" name="services" placeholder="Type or select a service" required />
                                            <datalist id="services">
                                                <option value="Graphics Design" />
                                                <option value="Digital Painting" />
                                                <option value="Animated Videos" />
                                                <option value="Live Action Videos" />
                                                <option value="Print Design" />
                                                <option value="Social Media Management" />
                                                <option value="Media buying" />
                                                <option value="Query Management" />
                                                <option value="Website Design & Development" />
                                                <option value="Web and Mobile App" />
                                                <option value="Product Development" />
                                                <option value="Embedded Systems Development" />
                                                <option value="Internet of Things" />
                                            </datalist>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" name="email" id="subscribe-email" placeholder="Email Address"
                                                required />
                                        </div>
                                        <button type="submit" className="submit-btn"><span>GET A FREE QUOTE</span></button>
                                    </div>
                                </form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
}
