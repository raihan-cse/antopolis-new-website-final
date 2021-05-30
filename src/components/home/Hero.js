import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Hero() {
    return (
        <>
            <section className="hero-section">
                <div className="container-wrapper">
                    <Container>
                        <div className="heading">
                            <h1 class="first">We are Antopolis</h1>
                            <h1 class="second">We empower changemakers.</h1>
                            {/* <h1 class="third">This website will be live soon!</h1> */}
                            <p>We’d love to work with you in the meantime. <br /> Just drop us a line below!</p>
                        </div>
                        <Row>
                            <Col sm={6} md={12} lg={12}>
                                <form id="form" novalidate >
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
                                        <div class="form-group">
                                            <input type="email" className="form-control" name="email" id="subscribe-email" placeholder="Email Address"
                                                required />
                                        </div>
                                        <button type="submit" className="submit-btn">GET A FREE QUOTE</button>
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