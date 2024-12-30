import { useState } from "react";
import Cover from "../../Components/Cover/Cover";
import ShopCard from "../../Components/ShopCard/ShopCard";
import useMenu from "../../Hooks/useMenu";
import img from "../../assets/shop.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useParams } from "react-router-dom";

const OurShop = () => {
  const categories = ["salad", "pizza", "soup", "desserts", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  console.log(category);
  const [menu] = useMenu();
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Cover
        coverImg={img}
        title={"our shop"}
        details={"Would You Like to Try a Dish"}
      ></Cover>

      <div className="flex justify-center items-center w-11/12 mx-auto my-12">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="flex justify-center items-center my-6">
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUP</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-3 gap-4 justify-center items-center">
              {salad.map((item) => (
                <ShopCard item={item} key={item._id}></ShopCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-4 justify-center items-center">
              {pizza.map((item) => (
                <ShopCard item={item} key={item._id}></ShopCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-4 justify-center items-center">
              {soup.map((item) => (
                <ShopCard item={item} key={item._id}></ShopCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-4 justify-center items-center">
              {desserts.map((item) => (
                <ShopCard item={item} key={item._id}></ShopCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-4 justify-center items-center">
              {drinks.map((item) => (
                <ShopCard item={item} key={item._id}></ShopCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
