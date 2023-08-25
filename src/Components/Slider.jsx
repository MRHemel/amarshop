import { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'animate.css';
import { Bounce, JackInTheBox, Roll } from "react-awesome-reveal";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slider.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';


const Slider = () => {
    const [photos, setPhotos] = useState([])
    useEffect(() => {
        fetch('photo.json')
            .then(res => res.json())
            .then(data => {
                setPhotos(data)
            })
    }, [])

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                {
                    photos.map(photo => (<SwiperSlide key={photo.id}><div className="hero min-h-screen" style={{ backgroundImage: `url(${photo.img})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">

                                <Roll ><h1 className="mb-5 text-5xl font-bold">Grab Your Trendy Products</h1></Roll>
                                <Bounce className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</Bounce>
                                <JackInTheBox className="btn bg-[#96ECB4] animate__animated animate__bounce"><Link to={'/allproducts'}>Shop Now</Link></JackInTheBox>
                            </div>
                        </div>
                    </div></SwiperSlide>))
                }


                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>

        </div>
    );
};

export default Slider;