import React from "react";
import "./MenuBanner.css";
import TitleSection from "../TitleSection/TitleSection";
import featuredImg from "../../assets/featured.jpg";
const MenuBanner = () => {
  return (
    <div className="banner w-full h-[500px] my-12">
      {/* <div className="bg-[#0000005c] h-full"></div> */}
      <div className="">
        <TitleSection
          heading={"Check It Out"}
          subHeading={"from our Menu"}
        ></TitleSection>
      </div>
      <div className="grid grid-cols-2 gap-6 w-3/4 mx-auto py-6">
        <div className="flex-1">
          <img src={featuredImg} alt="" />
        </div>
        <div className="text-lg font-semibold text-white">
          <h4>March 20, 2023</h4>
          <h4>
            WHERE CAN I GET SOME?
            <p>
              orem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="px-4 py-2 rounded-xl  border-white border-b-2 hover:bg-white hover:text-black">Read More</button>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default MenuBanner;
