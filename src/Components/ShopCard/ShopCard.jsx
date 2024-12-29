const ShopCard = ({ item }) => {
  const { image, recipe, name, price } = item;
  return (
    <div>
      <div>
        <div className="card shadow-xl">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title justify-center">{name}</h2>
            <p className="text-center">{recipe}</p>
            <p>{price}</p>
            <div className="card-actions justify-center">
              <button className="px-4 py-2 rounded-lg text-white bg-[#1c1c1ccd]">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
