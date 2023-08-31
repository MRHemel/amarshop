
import Discount from "../../../Components/Discount";
import Features from "../../../Components/Features/features";
import FeedBack from "../../../Components/FeedBack";
import PopularProducts from "../../../Components/PopularProducts";
import Slider from "../../../Components/Slider";
import BestDeals from "../BestDeals";
import Contact from "../Contact";



const Home = () => {
    return (
        <div className="bg-[#e6ffe6]">
            <Slider></Slider>
            <Features></Features>
            <PopularProducts></PopularProducts>
            <Discount></Discount>
            <BestDeals></BestDeals>
            <Contact></Contact>
            <FeedBack></FeedBack>

        </div>
    );
};

export default Home;