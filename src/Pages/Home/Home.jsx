import Banner from "../../Components/Banner/Banner";
import Category from "../../Components/Category/Category";
import ChefBanner from "../../Components/ChefBanner/ChefBanner";
import ChefRecommend from "../../Components/ChefRecommend/ChefRecommend";
import Contact from "../../Components/Contact/Contact";
import MenuBanner from "../../Components/MenuBanner/Menubanner";
import MenuItem from "../../Components/MenuItem/MenuItem";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ChefBanner></ChefBanner>
            <MenuItem></MenuItem>
            <Contact></Contact>
            <ChefRecommend></ChefRecommend>
            <MenuBanner></MenuBanner>
        </div>
    );
};

export default Home;