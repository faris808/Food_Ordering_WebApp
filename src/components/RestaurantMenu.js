import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import cdn_url from "../contants";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
// import { useDispatch } from "react-redux";
const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;
  const res=useRestaurant(id);
  const dispatch=useDispatch(); 
  const addFoodItem=(restaurant)=>{
    dispatch(addItem(restaurant));
  }
  return (!res) ? (
    <Shimmer />
  ) : (
    <div className="flex my-4">
      <div className="mx-4">
        <img className="h-60" src={cdn_url + res?.cards[0]?.card?.card?.info?.cloudinaryImageId} />
        <h2 className="font-bold">{res?.cards[0]?.card?.card?.info?.name}</h2>
        <h2>Restaurant Id is:- {res?.cards[0]?.card?.card?.info?.id}</h2>
        <h2>{res?.cards[0]?.card?.card?.info?.locality}</h2>
        <h2>{res?.cards[0]?.card?.card?.info?.areaName}</h2>
        <h2>{res?.cards[0]?.card?.card?.info?.avgRating}</h2>
        <h2>{res?.cards[0]?.card?.card?.info?.costForTwoMessage}</h2>
      </div>
      <div className="mx-8">
        <h2 className="font-bold">Menus List are as follows</h2>
        <ul className="list-disc">
          {res.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
            (restaurant) => {
                return <li className="m-1" key={restaurant.card.info.id}>
                  {restaurant.card.info.name} - <button className="bg-lime-200 px-2" onClick={()=>addFoodItem(restaurant)}>Add</button>
                </li>
            }
          )}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
