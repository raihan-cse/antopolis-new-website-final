import React, { useState, useEffect, useRef } from 'react'
import { Nav} from 'react-bootstrap'
import Content from './fortfolio/Content'
import Tech from './fortfolio/Tech'
import Business from './fortfolio/Business'

export default function Portfolio() {
    const hello = useRef()
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        window.onscroll = () => {
            // top: hello.current.offsetTop, behavior: "smooth"
            // let divHeight = document.getElementById("scHeight")
            // let heightY = divHeight.scrollHeight
            let heightY = hello.offsetTop
            let wheightY = window.pageYOffset
            
            if(wheightY > heightY) {
                setOffset(heightY)
                console.log(offset); 
            }
            else {
                console.log("hello two")
            }
            
          setOffset(wheightY)
        }
      });
    
      

    return (
        <>
        <section className={`protfolio-section spb-100`} id="scHeight" ref={hello}>
                {/* <div className={`test `}>
                    <div className="hlo">
                        <h1>helllo </h1>
                    </div>
                </div> */}
                <div className="tab-wrapper">
                        <Nav variant="tabs" defaultActiveKey="#home">
                            <Nav.Item>
                                <Nav.Link href="#business">business</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#tech">tech</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#content">content</Nav.Link>
                            </Nav.Item>
                        </Nav>
                </div>
                <Business />
                <Tech />
                <Content />
            </section>
        </>
    )
}
