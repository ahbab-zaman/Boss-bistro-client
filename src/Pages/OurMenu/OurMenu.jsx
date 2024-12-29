import Cover from "../../Components/Cover/Cover";
import TitleSection from "../../Components/TitleSection/TitleSection";
import useMenu from "../../Hooks/useMenu";
import MenuCategory from "../../SharedFiles/MenuCategory/MenuCategory";
import img1 from "../../assets/banner.jpg";
import img2 from "../../assets/chef-service.jpg";
import img3 from "../../assets/dessert-bg.jpeg";
import img4 from "../../assets/pizza-bg.jpg";
import img5 from "../../assets/salad-bg.jpg";
import img6 from "../../assets/soup-bg.jpg";

const OurMenu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  return (
    <div>
      <Cover
        coverImg={img1}
        title={"OUR MENU"}
        details={"would you like to try a dish"}
      ></Cover>
      {/* Offer menu */}
      <TitleSection
        heading={"Don't Miss"}
        subHeading={"Todays Offer"}
      ></TitleSection>
      <MenuCategory items={offered}></MenuCategory>
      {/* Dessert menu */}
      <Cover
        coverImg={img3}
        title={"DESSERTS"}
        details={"Try Our Dessert Dish. Made by worlds best chef"}
      ></Cover>

      <MenuCategory items={dessert}></MenuCategory>

      {/* Pizza Menu */}
      <Cover
        coverImg={img4}
        title={"PIZZA"}
        details={"Try Our Pizzas. Made by worlds best chef"}
      ></Cover>
      <MenuCategory items={pizza}></MenuCategory>

      {/* Salads Menu */}
      <Cover
        coverImg={img5}
        title={"SALADS"}
        details={"Try Our Salads. Made by worlds best chef"}
      ></Cover>
      <MenuCategory items={salad}></MenuCategory>

      {/* Soups Menu */}
      <Cover
        coverImg={img6}
        title={"SOUPS"}
        details={"Try Our Soups. Made by worlds best chef"}
      ></Cover>
      <MenuCategory items={soup}></MenuCategory>
    </div>
  );
};

export default OurMenu;
