import { Parallax } from "react-parallax";
const Cover = ({ coverImg, title, details }) => {
  return (
    <div>
      <Parallax
        blur={{ min: -10, max:10 }}
        bgImage={coverImg}
        bgImageAlt="the menu"
        strength={-100}
      >
        <div className="h-[500px] flex justify-center items-center ">
          <div className="bg-[#0000006a] text-white font-semibold w-3/4 h-1/2 flex flex-col justify-center items-center uppercase space-y-3">
            <h3 className="text-6xl">{title}</h3>
            <p className="w-3/5 text-lg text-center">{details}</p>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Cover;
