import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import SlickSlider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../../assets/scss/portfolio.scss'

export default function Content() {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    //play / pause button toggle
    const [push, setPush] = useState(true)

    useEffect(() => {

        setNav1(slider1);
        setNav2(slider2);

    }, [slider1, slider2]);

    const handlePush = () => {
        setSlider1(slider1.slickPause())
        setPush(false)
    }
    const handlePlay = () => {
        setSlider1(slider1.slickPlay())
        setPush(true)
    }

    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 5000,
        speed: 2000,
    };

    const settingsThumbs = {
        slidesToShow: 9,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        swipeToSlide: false,
        focusOnSelect: true,
        autoplaySpeed: 3000,
        speed: 2000,
    };

    
    const slidesData = [
        {
            id: 1,
            imgUrl: '/assets/img/media/media-black.png',
            imgAlt: 'One',
            csLink: '#demo'
        },
        {
            id: 2,
            imgUrl: '/assets/img/media/media-black.png',
            imgAlt: 'two',
            csLink: '#demo'
        },
        {
            id: 3,
            imgUrl: '/assets/img/media/media-black.png',
            imgAlt: 'Three',
            csLink: '#demo'
        },
        {
            id: 4,
            imgUrl: '/assets/img/media/media-black.png',
            imgAlt: 'Four',
            csLink: '#demo'
        },
        {
            id: 5,
            imgUrl: '/assets/img/media/media-black.png',
            imgAlt: 'Five',
            csLink: '#demo'
        },
        {
            id: 6,
            imgUrl: '/assets/img/media/media-black.png',
            imgAlt: 'Six',
            csLink: '#demo'
        },
        {
            id: 7,
            imgUrl: '/assets/img/media/media-black.png',
            imgAlt: 'Seven',
            csLink: '#demo'
        },
        {
            id: 8,
            imgUrl: '/assets/img/media/media-black.png',
            imgAlt: 'Eight',
            csLink: '#demo'
        },
        {
            id: 9,
            imgUrl: '/assets/img/media/media-black.png',
            imgAlt: 'Nine',
            csLink: '#demo'
        },
    ];

    return (
        <>
            <section className="profile-content-section" id="content">
                <div className="profile-content-wrapper black">
                    <div className="profile-content-inner first-box">
                    <div className="first-box-inner"></div>
                    </div>

                    <div className="profile-content-inner second-box">
                        <div className="profile-left-box">
                            <div className="profile-left-contet">
                                <h3>Content Development</h3>
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/img/ui-ux-white.svg'} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>UI/UX Design</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/img/websites-white.svg'} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Websites</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/img/mobile-app-white.svg'} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mobile Apps</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/img/software-white.svg'} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Corporate Software</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="full-profile">
                                <a href="#demo">
                                    <span>full profile</span>
                                    <span>
                                        <img src={process.env.PUBLIC_URL + '/assets/img/angle-right-white.svg'} alt="angle-right-white" />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="profile-content-inner third-box">
                        <div className="profile-right-box">
                            <div className="slick-slider-wrapper">

                                <SlickSlider
                                    {...settingsMain}
                                    asNavFor={nav2}
                                    ref={slider => (setSlider1(slider))}
                                >
                                    {slidesData.map((slide) =>
                                        <div className="slick-slide-content" key={slide.id}>
                                            <img className="slick-slide-image" src={slide.imgUrl} alt={slide.imgAlt} />
                                            <div className="web-visit-box">
                                                <a href="#demo">
                                                    <span>visit website</span>
                                                    <span>
                                                        <img src={process.env.PUBLIC_URL + '/assets/img/angle-right-white.svg'} alt="angle-right-white" />
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    )}

                                </SlickSlider>
                                <div className="slick-thumbnail-wrapper">
                                    <SlickSlider
                                        {...settingsThumbs}
                                        asNavFor={nav1}
                                        ref={slider => (setSlider2(slider))}>
                                        {slidesData.map((slide) =>
                                            <div className="slick-slide-content" key={slide.id}>
                                                <img className="slick-slide-image" src={slide.imgUrl} alt={slide.imgAlt} />
                                            </div>
                                        )}

                                    </SlickSlider>
                                </div>
                                <div className="play-push-box">
                                    {
                                        push ?
                                            <Button onClick={handlePush} variant="none" className="ps-btn push">
                                                <img src={process.env.PUBLIC_URL + '/assets/img/pause-white.svg'} alt="btn-push" />
                                            </Button>
                                            :
                                            <Button onClick={handlePlay} className="ps-btn play">
                                                <img src={process.env.PUBLIC_URL + '/assets/img/play-white.svg'} alt="btn-push" />
                                            </Button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
