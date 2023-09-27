import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  //const store=useSelector(store=>store);//this cart component will re-render after every any changes made in the store, which is not a good thing
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch=useDispatch();
  const handleclearcart=()=>{
    dispatch(clearCart());
  }
  return (
    <>
      <h1 className="text-center m-1 font-semibold text-lg">
        This is a Cart Page
      </h1>
      <h2>Cart Items - {cartItems.length}</h2>
      <button className="bg-green-300 p-2 m-5" onClick={()=>handleclearcart()}>clearCart</button>
      <div className="flex flex-wrap">
        {cartItems.map((restaurant) => {
          return (
            <FoodItem
              key={restaurant.card.info.id}
              {...restaurant?.card?.info}
            />
          );
        })}
        ;
      </div>
    </>
  );
};
export default Cart;
