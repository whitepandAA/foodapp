import {resimg} from "../constants/img";
const Rescard=(props)=>{
    const {resdata}=props;
    const {cloudinaryImageId,cuisines,name,avgRating,costForTwo,sla}=resdata?.info;
    return(
    <div className="res-card">
    <img src={resimg+cloudinaryImageId} className="resimg" alt="resimage"></img>
    <div className="rescontent">
    <h3 id="nam">{name}</h3>
    <div>{cuisines.join(", ")}</div>
    <div>{avgRating} stars</div>
    <div>{costForTwo}</div>
    <div>{sla.deliveryTime} mins</div>
    </div>
    
    </div>
)
    
}

export default Rescard; 