import Rescard from "./Rescard";
import { useState ,useEffect} from "react";
import Shimmer from "./loading";


const Body=()=>{
  const[res,setres]=useState([]);
  const[sres,setsres]=useState([]);
  useEffect(()=>{
    fetchdata();
  },[])
  const [sbtn,setsbtn]=useState("");
 const fetchdata=async()=>{
    const dat=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.44250&lng=81.85170&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json=await dat.json();
    setsres(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setres(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  };
  if(res.length===0){
    return <Shimmer/>
  }
  
    return(
      
      <div className="mainbody">
       <div className="specialbtn">
          <div className="sbtn">
            <input placeholder="Restaurant/cafe" type="search" id="search" value={sbtn} 
            onChange={(e)=>{
              setsbtn(e.target.value)
            }}></input>
            <button onClick={()=>{
              console.log(sbtn);
              const flt =res.filter((rst)=>{
               return rst.info.name.toLowerCase().includes(sbtn.toLowerCase())
              
            });
              console.log(flt);
              setsres(flt);
            }}>search</button>
           </div>
          <div className="specialbtn3">
             <button className="eat"id="veg" onClick={()=>{
                const vg=res.filter(
                (rst)=>rst.info.veg===true
                );
               setsres(vg);
                }}>Veg</button>
                <button className="eat"id="nonveg" onClick={()=>{
                const ng=res.filter((rst)=>rst.info.veg ===undefined);
                 setsres(ng);
               }}>Non-Veg</button>
                <button onClick={()=>{
                const filtered=res.filter(
                 (rst)=>rst.info.avgRating>4
               );
                setsres(filtered);
                 }} className="toprate">Top Rated Restaurant</button>
             </div>
      
      </div>
          
      
      <div className="res-container">
         {
          sres.map((rest)=>
          <Rescard key ={rest['info']['id']} 
          resdata={rest}/>)
         }

      </div> 
      </div>  

    )
}
export default Body ;