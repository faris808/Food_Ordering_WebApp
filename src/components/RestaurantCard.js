import cdn_url from "../contants.js";
const RestaurantCard = ({
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
}) => {
  return (
    <>
      <div className="w-52 mx-10 my-5 p-1 bg-rose-100">
        <img src={cdn_url + cloudinaryImageId} />
        <h2 className="font-extrabold">{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating + " Stars"}</h4>
      </div>
    </>
  );
};
export default RestaurantCard;
