import AddToCartButton from "@/components/menu/AddToCartButton";

export default function MenuItemTile({onAddToCart, ...item}) {
    const {image, description, name, basePrice, sizes, extraIngredientPrices} = item;
    const hasSizesOrExtras = sizes?.length > 0 || extraIngredientPrices?.length > 0;

    return (
        <div className=" p-4 rounded-lg text-center border-2 border-gray-200
                        group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all cursor-pointer"
                        onClick={onAddToCart}
                        >
                <img src={image} className="max-h-auto max-h-72 block mx-auto hover:scale-110 duration-500 transition-transform" alt="product"/>
                <h4 className="font-semibold my-3 text-xl">{name}</h4>
                <p className="text-gray-500 text-sm line-clamp-3">{description}</p>
                <button 
                    type="button"
                    onClick={onAddToCart}
                    className="mt-4 bg-primary text-white rounded-full px-8 py-2">
                    {hasSizesOrExtras ? (
                        <span>From ${basePrice.toFixed(2)}</span>
                    ) : (
                        <span>Add to cart ${basePrice.toFixed(2)}</span>
                    )}
                </button>
            </div>
    );
}