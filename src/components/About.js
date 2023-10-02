import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass.js";

const About = () => {
  return (
    <>
      <h1 className="text-center my-4 font-bold text-3xl">This is an about page</h1>
      <h3 className="text-center my-40 text-xl font-medium">You are most welcomed on this page</h3>
      <Outlet />
    </>
  );
};
export default About;
