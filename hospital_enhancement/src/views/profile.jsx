import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header";
import "../styles/profile.css";
 const Profile =()=>{
   const navigate = useNavigate();
   const navigateTo = (path) => {
     navigate(path);
   };
    return(
      <div>
        <Header/>
         <div  className="profile-main">
         <button className="button" onClick={() => navigateTo("/login")}>
          Login
        </button>
        <button className="button" onClick={() => navigateTo("/signup")}>
          signup
        </button>
         </div>
      </div>
    );
};
export default Profile;