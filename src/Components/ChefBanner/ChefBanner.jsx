import "./chefBanner.css"
const ChefBanner = () => {
    return (
        <div className="bannerBg h-[500px] w-11/12 mx-auto bg-cover flex justify-center items-center my-12">
            <div className="bg-white font-semibold w-3/4 h-1/2 flex flex-col justify-center items-center  ">
                <h3 className="text-3xl">Bistro Boss</h3>
                <p className="w-3/5 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores at repellendus fugit sapiente, Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sapiente!</p>
            </div>
        </div>
    );
};

export default ChefBanner;