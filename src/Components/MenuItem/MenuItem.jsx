import axios from "axios";
import { useEffect, useState } from "react";
import TitleSection from "../TitleSection/TitleSection";
import PopularMenu from "../PopularMenu/PopularMenu";

const MenuItem = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    const fetchMenu = async () => {
      const { data } = await axios.get("./menu.json");
      const popularItems = data.filter((item) => item.category === "popular");
      setMenu(popularItems);
    };
    fetchMenu();
  }, []);
  return (
    <div>
      <div>
        <TitleSection
          heading="Check It Out"
          subHeading="from our menu"
        ></TitleSection>
      </div>
      <div className="grid grid-cols-2 gap-4 w-11/12 mx-auto my-12">
        {menu.map((item) => (
          <PopularMenu key={item._id} item={item}></PopularMenu>
        ))}
      </div>
      <div className="my-4 flex justify-center items-center">
        <button className="text-lg font-semibold text-center  btn border-none border-b-2 hover:btn-neutral">View All Menu</button>
      </div>
    </div>
  );
};

export default MenuItem;
