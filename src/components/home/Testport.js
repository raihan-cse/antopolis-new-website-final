import React, { useEffect, useRef } from 'react'
import '../../assets/scss/testport.scss'

export default function Testport() {
    const offTop = useRef(null)

    useEffect(() => {
        let { offsetTop } = offTop.current
        let pageY = window.pageYOffset
        window.onscroll = () => {
            console.log(pageY)
            if ({ offsetTop } < pageY) {
                console.log("hello")
            }
            else {
                console.log("hello two")
            }
        }
    })
    return (
        <>
            <section className="port-sec" ref={offTop}>
                <div className="ptab">
                    <div className="sticky-top" style={{display: 'block', width: '100%', bottom: '0'}}>
                        <div className="position-relative">
                            <div className="drotate">
                                <a href="#pone">Business</a>
                                <a href="#ptwo">Tech</a>
                                <a href="#pthree">Content</a>
                            </div>

                            {/* <ul>
                        <li>
                            <a href="#pone">Business</a>
                        </li>
                        <li>
                            <a href="#ptwo">Tech</a>
                        </li>
                        <li>
                            <a href="#pthree">Content</a>
                        </li>
                    </ul> */}
                        </div>
                    </div>
                </div>
                <div className="content" style={{ backgroundColor: 'black' }} id="pone"></div>
                <div className="content" id="ptwo"></div>
                <div className="content" style={{ backgroundColor: 'black' }} id="pthree"></div>
            </section>
        </>
    )
}
