import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurentCard = ({resData}) => {
    const {cloudinaryImageId,name,cuisines,avgRating} = resData;
    //destructuring the props
   
    return(
        <div className="res-card" style ={{backgroundColor:"#f0f0f0"}}>
            <img 
                className="res-logo"
                alt="res-logo"
                src={CDN_URL+cloudinaryImageId}/>
           <h3>{name}</h3>
           <h4>{cuisines.join(",")}</h4>
           <h4>{avgRating}</h4>
           <h4>38 minutes</h4>
        </div>
    )
}
export default RestaurentCard;