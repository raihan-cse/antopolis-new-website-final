import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/scss/navbar.scss'

export default function Navbar() {
    return (
        <>
            <div className="navbar-wrapper">
                <div className="navbar-inner">
                    <div className="logo-wrapper">
                        <Link to='/'>
                            <img src={process.env.PUBLIC_URL + '/assets/img/anto-logo-black.png'} alt="btcl" className="img-fluid" />
                        </Link>
                    </div>
                    <div className="blog-btn-wrapper">
                        <a className="consult-btn" href="#demo">
                            <span>Book 30 Mins Consultancy</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
