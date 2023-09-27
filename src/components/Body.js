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
  const { user, setuser } = useContext(UserContext);
  useEffect(() => {
    getrestaurants();
  }, []);
  async function getrestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6842631&lng=75.8761907&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setallrestaurants(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredrestaurants(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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
      <div className="bg-violet-200 my-3">
        <input data-testid="search-input"
          type="text"
          className="my-5 p-1 mx-2 px-2"
          placeholder="search"
          value={searchTxt}
          onChange={(e) => setsearchTxt(e.target.value)}
        />
        <button data-testid="search-btn"
          className="bg-green-300 p-1 px-5"
          onClick={() => {
            const filtereddata = filterData(searchTxt, allrestaurants);
            setfilteredrestaurants(filtereddata);
          }}
        >
          search
        </button>
        <input
          value={user.name}
          onChange={(e) =>
            setuser({
              ...user,
              name: e.target.value,
            })
          }
        ></input>
        <input
          value={user.email}
          onChange={(e) =>
            setuser({
              ...user,
              email: e.target.value,
            })
          }
        ></input>
        {console.log(user.name)}
        {console.log(user.email)}
      </div>
      <div className="flex flex-wrap" data-testid="res-list">
        {filteredrestaurants.map((Restaurant) => {
          return (
            <Link to={"/restaurant/" + Restaurant?.info?.id}>
              <RestaurantCard {...Restaurant?.info} key={Restaurant?.info?.id} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
