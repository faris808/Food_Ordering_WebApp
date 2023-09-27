import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Title = () => (
    <a href="/">
      <img data-testid="logo"
        className="h-16 mx-2 my-1"
        alt="logo"
        src="https://lh3.googleusercontent.com/S30-4cx5rGMx2DRoSMq1h9qq7EcU9sf8y_w1yBWG4duf9xWpYF5TFovh7IkF6MXnvw"
      />
    </a>
);
const Header = () => {
  const [stat,setstat]=useState(false);
  const {user}=useContext(UserContext);
  const cartItems=useSelector(store =>store.cart.items) //I want to subscribe to my store.cart.items
  console.log(cartItems);
    return (
      <div className="flex justify-between bg-violet-200">
        <Title />
        <div className="nav-items">
          <ul className="flex my-5 space-x-8">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li data-testid="cart"><Link to="/cart">Cart-{cartItems.length}</Link></li>
            <li><Link to="/instamart">Instamart</Link></li>
          </ul>
        </div>
        <h1>{user.name}</h1>
        {
            (stat?<button onClick={()=>setstat(false)}>LogOut</button>:<button onClick={()=>setstat(true)}>LogIn</button>)
        }
      </div>
    );
};
export default Header;

