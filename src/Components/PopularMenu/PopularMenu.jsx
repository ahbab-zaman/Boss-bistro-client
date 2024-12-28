const PopularMenu = ({item}) => {
    const {image, name, price, recipe} = item
    return (
        <div className="flex items-start justify-center">
            <div className="mr-4"><img className="w-24 rounded-full rounded-tl-none" src={image} alt="" /></div>
            <div className="w-3/4">
                <h4 className="text-xl font-semibold text-gray-500">{name}</h4>
                <p className="text-sm font-light">{recipe}</p>
            </div>
            <div>
                <p className="text-yellow-500 font-semibold">${price}</p>
            </div>
        </div>
    );
};

export default PopularMenu;