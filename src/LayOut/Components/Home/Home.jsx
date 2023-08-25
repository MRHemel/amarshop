
import Features from "../../../Components/Features/features";
import FeedBack from "../../../Components/FeedBack";
import PopularProducts from "../../../Components/PopularProducts";
import Slider from "../../../Components/Slider";



const Home = () => {
    return (
        <div className="bg-[#e6ffe6]">
            <Slider></Slider>
            <Features></Features>
            <PopularProducts></PopularProducts>
            <FeedBack></FeedBack>

        </div>
    );
};

export default Home;