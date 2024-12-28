import Card1 from "../Card1/Card1";
import TitleSection from "../TitleSection/TitleSection";

const ChefRecommend = () => {
  return (
    <div>
      <div>
        <TitleSection
          heading={"Should Try"}
          subHeading={"Chefs Recommend"}
        ></TitleSection>
      </div>
     <div className="w-11/12 mx-auto flex justify-center items-center gap-4 my-8">
        <Card1></Card1>
        <Card1></Card1>
        <Card1></Card1>
     </div>
    </div>
  );
};

export default ChefRecommend;
