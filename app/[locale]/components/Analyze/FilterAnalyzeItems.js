import { addToCart } from "@/store/cardSlice";
import { useDispatch, useSelector } from "react-redux";
import { SlBasket } from "react-icons/sl";

export default function FilterAnalyzeItems({
  title,
  shortDescription,
  price,
  slug,
  locale,
}) {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const item = {
      id: slug, // yoki uni qanday identifikator bilan ajratmoqchi bo‘lsangiz, shuni yozing
      name: title, // nomi
      fee: price, // narxi
      count: 1, // boshlang‘ich miqdori 1 bo‘ladi
    };
    dispatch(addToCart(item));
  };

  // Redux'dan shu itemga tegishli count ni olish
  const itemInCart = useSelector((state) =>
    state.cart.items.find((item) => item.id === slug)
  );
  const count = itemInCart ? itemInCart.count : 0; // Agar savatchada bo‘lsa count, bo‘lmasa 0

  return (
    <div className="w-full flex flex-col gap-5 max-mdx:gap-2">
      <div className="flex justify-between items-start max-mdx:flex-col max-mdx:gap-4">
        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        <div className="flex flex-col mdx:flex-row  mdx:gap-6 ">
          {price != null && (
            <p className="whitespace-nowrap text-red-500 font-bold text-lg">
              {price} сум
            </p>
          )}
          <button
            onClick={handleAddToCart}
            className={`${count < 10 ? "disabled:inset-0" : ""} bg-red-400 text-center hover:bg-red-500  text-white p-3 rounded-[10px] relative`}
          >
            <SlBasket className="text-center mx-auto" size={20} />
            {count > 0 && ( // Faqat count > 0 bo‘lsa chiqsin
              <span className="absolute -top-2 -right-[2px] bg-white text-red-500 text-xs font-bold px-2 py-1 rounded-full">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}
