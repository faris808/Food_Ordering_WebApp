import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass.js";

const About = () => {
  return (
    <>
      <h1>This is a about page</h1>
      <h3>You are most welcomed on this page</h3>
      <Outlet />
    </>
  );
};
export default About;
