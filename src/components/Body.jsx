import React from "react";
import { useState } from "react";
import RestaurentCard from "./RestaurentCard";
import { resObj } from "../utils/mockData";

const Body = () => {
    //declaring a state variable
    const [ListofRestaurent, setListofRestaurent] = useState(resObj);

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                        onClick = {()=>{
                        const filteredList = ListofRestaurent.filter(
                            (res)=>res.card.card.info.avgRating>4.5);
                        setListofRestaurent(filteredList);
                        }}
                    >Top Rated Restaurent</button>
            </div>
            <div className="res-container">
            {
                ListofRestaurent.map((restaurent) => (
                    <RestaurentCard 
                    key={restaurent.card.card.info.id}
                      resData={restaurent.card.card.info}/>
                ))
            }
            </div>
        </div>
    );
};
export default Body;