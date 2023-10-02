import { useState } from "react";

const Section = ({ title, description,isshow,setisshow }) => {
  return (
      <div className="border border-black m-3 p-2">
        <h1 className="font-semibold text-lg">{title}</h1>
        {isshow?(<button onClick={()=>setisshow(false)}>Hide</button>) : (<button onClick={()=>setisshow(true)}>Show</button>)}
        {isshow?(<p>{description}</p>):null}
      </div>
  );
};
const Instamart = () => {
    const [isvisiblesection, setisvisiblesection] = useState("about");
  return (
    <>
      <h1 className="text-5xl font-extrabold text-center">Instamart</h1>
      <Section
        title={"About InstaMart"}
        description={""} isshow={isvisiblesection==="about"} setisshow={()=>isvisiblesection("about")}
      />
      <Section
        title={"Details Of InstaMart"}
        description={""} isshow={isvisiblesection==="details"} setisshow={()=>setisvisiblesection("details")}
      />
      <Section
        title={"Teams InstaMart"}
        description={""} isshow={isvisiblesection==="teams"} setisshow={()=>setisvisiblesection("teams")}
      />
      <Section
        title={"Product"}
        description={""} isshow={isvisiblesection==="product"} setisshow={()=>setisvisiblesection("product")}
      />
    </>
  );
};
export default Instamart;
