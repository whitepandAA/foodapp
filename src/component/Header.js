import { logo} from "../constants/img";
import { useState} from "react";
import { Link } from "react-router-dom";
const Header=()=>{
   const [letbtn,setletbtn]=useState("login");
    return (<div className="header">
     <div className="logocontainer">
       <img className="img" src={logo} alt="logo"></img>
     </div>
     <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
          <li>Cart</li>
          <button className="log" onClick={()=>{
            if(letbtn==="login"){
              setletbtn("logout");
            }else{
              setletbtn("login");
            }
          }}>{letbtn}</button>
          
        </ul>
      </div>
    </div>
)}
 
export default Header;