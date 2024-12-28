const TitleSection = ({ heading, subHeading }) => {
  return (
    <div className="w-3/4 mx-auto text-center my-8">
      <h2 className="font-semibold text-yellow-500 text-xl">---{heading}---</h2>
      <h4 className="uppercase text-3xl font-semibold border-t-2 w-1/2 mx-auto my-2 py-2 border-b-2">{subHeading}</h4>
    </div>
  );
};

export default TitleSection;
