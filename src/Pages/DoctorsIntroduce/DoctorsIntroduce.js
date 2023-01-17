import React, { Component } from "react";
import Slider from "react-slick";
import team1 from '../../img/team-1.jpg'
import team2 from '../../img/team-2.jpg'
import team3 from '../../img/team-3.jpg'
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";


export default class PauseOnHover extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        speed: 2000,
                        autoplaySpeed: 2000,
                        pauseOnHover: true,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        speed: 2000,
                        autoplaySpeed: 2000,
                        pauseOnHover: true,
                        infinite: true,
                        dots: true,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        speed: 2000,
                        autoplaySpeed: 2000,
                        pauseOnHover: true,
                        infinite: true,
                        dots: true,
                    }
                }
            ]
        };
        return (
            <div className="mt-20 ">
                <div className="text-center">
                    <h2 className="uppercase text-accent underline underline-offset-8 font-bold mb-3">Our Doctors</h2>
                    <h1 className="mb-10 text-5xl font-bold">Qualified Healthcare  <br /> Professional</h1>
                </div>
                <Slider {...settings}>


                    <div className="hero bg-sky-100 gap-4">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={team1} className="w-1/2 rounded-lg shadow-2xl" alt="" />
                            <div className="">
                                <h1 className="text-4xl font-bold">Doctor Name X</h1>
                                <p className="text-xl font-bold">Cardiology Specialist</p>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <div className="flex gap-6">
                                    <Link><FaFacebook className="h-10 w-10"></FaFacebook></Link>
                                    <Link><FaTwitter className="h-10 w-10"></FaTwitter></Link>
                                    <Link><FaLinkedin className="h-10 w-10"></FaLinkedin></Link>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="hero bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={team2} className="w-1/2 rounded-lg shadow-2xl" alt="" />
                            <div>
                                <h1 className="text-4xl font-bold">Doctor Name ABC</h1>
                                <p className="text-xl font-bold">Cardiology Specialist</p>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <div className="flex gap-6">
                                    <Link><FaFacebook className="h-10 w-10"></FaFacebook></Link>
                                    <Link><FaTwitter className="h-10 w-10"></FaTwitter></Link>
                                    <Link><FaLinkedin className="h-10 w-10"></FaLinkedin></Link>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="hero bg-sky-100 mr-2">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={team3} className="w-1/2 rounded-lg shadow-2xl" alt="" />
                            <div>
                                <h1 className="text-4xl font-bold">Doctor Name YZ</h1>
                                <p className="text-xl font-bold">Cardiology Specialist</p>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <div className="flex gap-6">
                                    <Link><FaFacebook className="h-10 w-10"></FaFacebook></Link>
                                    <Link><FaTwitter className="h-10 w-10"></FaTwitter></Link>
                                    <Link><FaLinkedin className="h-10 w-10"></FaLinkedin></Link>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="hero bg-base-200 mr-4">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={team1} className="w-1/2 rounded-lg shadow-2xl" alt="" />
                            <div>
                                <h1 className="text-4xl font-bold">Doctor Name Y</h1>
                                <p className="text-xl font-bold">Cardiology Specialist</p>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <div className="flex gap-6">
                                    <Link><FaFacebook className="h-10 w-10"></FaFacebook></Link>
                                    <Link><FaTwitter className="h-10 w-10"></FaTwitter></Link>
                                    <Link><FaLinkedin className="h-10 w-10"></FaLinkedin></Link>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="hero bg-sky-100 mr-4">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={team2} className="w-1/2 rounded-lg shadow-2xl" alt="" />
                            <div>
                                <h1 className="text-4xl font-bold">Doctor Name B</h1>
                                <p className="text-xl font-bold">Cardiology Specialist</p>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <div className="flex gap-6">
                                    <Link><FaFacebook className="h-10 w-10"></FaFacebook></Link>
                                    <Link><FaTwitter className="h-10 w-10"></FaTwitter></Link>
                                    <Link><FaLinkedin className="h-10 w-10"></FaLinkedin></Link>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="hero bg-base-200 ml-4">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={team3} className="w-1/2 rounded-lg shadow-2xl" alt="" />
                            <div>
                                <h1 className="text-4xl font-bold">Box Office News!</h1>
                                <p className="text-xl font-bold">Cardiology Specialist</p>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <div className="flex gap-6">

                                    <Link> <FaFacebook className="h-10 w-10"></FaFacebook></Link>
                                    <FaTwitter className="h-10 w-10"></FaTwitter>
                                    <FaLinkedin className="h-10 w-10"></FaLinkedin>

                                </div>
                            </div>
                        </div>
                    </div>


                </Slider>
            </div>
        );
    }
}