
import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import Swal from "sweetalert2";
import { addToDb } from "../Utilities/fakedb";


const PopularProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const popular = products.filter(product => product.ratings === 5)
    const handleBuyNow = (product) => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Product added in your cart',
            showConfirmButton: false,
            timer: 1500
        })
        addToDb(product.id)

    }
    return (
        <div className="my-16">
            <Slide direction="right">
                <div className="flex justify-center">
                    <h1 className="text-3xl font-bold text-center border-double border-y-8 border-[#9be9a0] inline-block">
                        Our Popular Products
                    </h1>
                </div>
            </Slide>
            <Slide direction="up" duration={1000} className="my-4">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        popular.map(item => (<SwiperSlide
                            key={item.id}
                        ><div className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={item.img} className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{item.name}</h2>
                                    <p>Brand: {item.seller}</p>
                                    <p>Price: ${item.price}</p>
                                    <div className="rating rating-md">
                                        <input type="radio" name="rating-10" className="rating-hidden" />
                                        <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 " />
                                        <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 " />
                                        <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 " />
                                        <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 " />
                                        <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 " checked />
                                    </div>
                                    <div onClick={() => handleBuyNow(item)} className="card-actions">
                                        <button className="btn bg-[#96ECB4]">Buy Now</button>
                                    </div>
                                </div>
                            </div></SwiperSlide>))
                    }


                </Swiper>
            </Slide>


        </div>
    );
};

export default PopularProducts;
