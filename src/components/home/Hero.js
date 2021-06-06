import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import Validate from './Validation'
import { useForm } from "react-hook-form";

export default function Hero() {
    // const [user, setUser] = useState({services: '', email: ''})
    // const {services, email} = user
    const frmdata = [
        {id: '1', service: 'Graphics Design'},
        {id: '2', service: 'Digital Painting'},
        {id: '3', service: 'Animated Videos'},
        {id: '4', service: 'Live Action Videos'},
        {id: '5', service: 'Print Design'},
        {id: '6', service: 'Social Media Management'},
        {id: '7', service: 'Media buying'},
        {id: '8', service: 'Query Management'},
        {id: '9', service: 'Website Design & Development'},
        {id: '10', service: 'Web and Mobile App'},
        {id: '11', service: 'Product Development'},
        {id: '12', service: 'Embedded Systems Development'},
        {id: '13', service: 'Internet of Things'}
    ]

    const { register, handleSubmit } = useForm();
    // const onSubmit = data => console.log(data);
    const onSubmit = (data, e) => {
        fetch('http://localhost:8000/formData', {
            method: 'POST',
            body: JSON.stringify({ data }),
            headers: { 'Content-Type': 'application/json' },
        })
        e.target.reset()
            // .then(res => res.json())
            // .then(json => setUser(json.data))
    }

    // const [emailvalidate, setemailValidate] = useState('')

    

    //for handle error 
    // const [errors, setErrors] = useState({})

    // const handleChange = (event) => {
    //     setUser({...user, [event.target.name]:event.target.value})
    // }
    // const handleSubmit = (event) => {
    //     console.log(user)
    //     event.preventDefault()
    //     setErrors(Validate(user))
    // }
    return (
        <>
            <section className="hero-section">
                
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
                                <form id="form" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-inline">
                                        <div className="form-group">
                                            <input type="text" className="form-control datalist" list="services" name="services" placeholder="Type or select a service" {...register("services", { required: true })} />
                                            <datalist id="services">
                                                {frmdata.map(data => <option key={data.id} value={data.service} />)}
                                                {/* <option value="Graphics Design" />
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
                                                <option value="Internet of Things" /> */}
                                            </datalist>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className={`form-control`} name="email" id="subscribe-email" placeholder="Email Address" {...register("email", { required: true })}/>
                                        </div>
                                        <button type="submit" className="submit-btn"><span>GET A FREE QUOTE</span></button>
                                    </div>
                                </form>
                                {/* <form id="form" onSubmit={handleSubmit}>
                                    <div className="form-inline">
                                        <div className="form-group">
                                            <input type="text" className="form-control datalist" list="services" name="services" value={services} onChange={handleChange} placeholder="Type or select a service" />
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
                                            {errors.services && <span>{errors.services}</span>}
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className={`form-control`} name="email" id="subscribe-email" value={email} onChange={handleChange} placeholder="Email Address" />
                                            {errors.email && <span className="error">{errors.email}</span>}
                                        </div>
                                        <button type="submit" className="submit-btn"><span>GET A FREE QUOTE</span></button>
                                    </div>
                                </form> */}
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
}
