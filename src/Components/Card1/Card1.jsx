import featuredImg from "../../assets/featured.jpg";
const Card1 = () => {
  return (
    <div>
      <div className="card shadow-xl">
        <figure>
          <img src={featuredImg} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center">Caeser Salad</h2>
          <p className="text-center">
            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
          </p>
          <div className="card-actions justify-center">
            <button className="px-4 py-2 rounded-lg text-white bg-[#1c1c1ccd]">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
