import { RestaurantList } from "../contants";
import RestaurantCard from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import filterData from "../utils/Helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [allrestaurants, setallrestaurants] = useState([]);
  const [searchTxt, setsearchTxt] = useState("");
  const [filteredrestaurants, setfilteredrestaurants] = useState([]);
  useEffect(() => {
    getrestaurants();
  }, []);
  async function getrestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6842631&lng=75.8761907&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    async function checkData(jsonData) {
      for (let i = 0; i < jsonData?.data?.cards.length; i++) {
        let checkData =
          jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        if (checkData !== undefined) {
          return checkData;
        }
      }
    }
    const resData = await checkData(json);
    setallrestaurants(resData);
    setfilteredrestaurants(resData);
  }
  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>You are Offline, Please Check your internet connection</h1>;
  }
  if (!allrestaurants) return null;
  return allrestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="bg-violet-200 my-3 px-10">
        <input
          data-testid="search-input"
          type="text"
          className="my-5 mx-2 px-2 outline-none h-10"
          placeholder="search"
          value={searchTxt}
          onChange={(e) => setsearchTxt(e.target.value)}
        />
        <button
          data-testid="search-btn"
          className="bg-green-300 px-5 h-10 transition-all ease-in-out duration-500 text-lg hover:bg-green-500"
          onClick={() => {
            const filtereddata = filterData(searchTxt, allrestaurants);
            setfilteredrestaurants(filtereddata);
          }}
        >
          search
        </button>
      </div>
      <div className="flex flex-wrap" data-testid="res-list">
        {filteredrestaurants.map((Restaurant) => {
          return (
            <Link to={"/restaurant/" + Restaurant?.info?.id}>
              <RestaurantCard
                {...Restaurant?.info}
                key={Restaurant?.info?.id}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
