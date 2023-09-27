import { useState,useEffect } from "react"

const useRestaurant=(id)=>{
    const [res,setres]=useState(null);
    useEffect(() => {
        getRestaurantInfo();
      }, []);
      async function getRestaurantInfo() {
        const data = await fetch(
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.6842631&lng=75.8761907&restaurantId=" +
            id +
            "&submitAction=ENTER"
        );
        const json = await data.json();
        setres(json.data);
    }
    return res;
}
export default useRestaurant;