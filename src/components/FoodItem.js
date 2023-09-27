import cdn_url from "../contants.js";
const FoodItem = ({
  name,
  description,
  imageId,
  price
}) => {
  return (
    <>
      <div className="w-52 mx-10 my-5 p-1 bg-rose-100">
        <img src={cdn_url + imageId} />
        <h2 className="font-extrabold">{name}</h2>
        <h3>{description}</h3>
        <h4>Rupees: {price/100}</h4>
      </div>
    </>
  );
};
export default FoodItem;