import { useEffect, useState } from "react";
import { addToDb } from "../../../Utilities/fakedb";
import axios from "axios";
import Swal from "sweetalert2";

const AllProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get("products.json")
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, [])

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
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
            {
                products.map(product => (<div key={product.id} className="card w-96 bg-base-100 shadow-xl hover:scale-105 transition-transform duration-300">
                    <figure className="px-10 pt-10">
                        <img src={product.img} alt="" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{product.name}</h2>
                        <p>Price:${product.price}</p>
                        <div onClick={() => handleBuyNow(product)} className="card-actions">
                            <button className="btn bg-[#96ECB4]">Add to Cart</button>
                        </div>
                    </div>
                </div>))
            }
        </div>
    );
};

export default AllProducts;