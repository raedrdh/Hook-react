import React from "react";
import ReactStars from "react-rating-stars-component";

const SearchText = ({ filtertext, filterrate }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "red", fontSize: "80px" }} className="titre">
        <span style={{ color: "blue" }}>Searsh list </span>Card
      </h1>
      <div style={{ display: "flex" }}>
        <div style={{display : 'flex', flexDirection :'column', justifyItems:'flex-start'}}>
          <p>type your movie name</p>
          <form className="search" >  
            <input
              onChange={(event) => filtertext(event.target.value)}
              placeholder="Search Movies"
              type="text"
            />
          </form>
        </div>
        <div style={{ paddingTop: "20px" }}>
          select your rating
          <ReactStars 
            count={10}
            onChange={(newRating) => filterrate(newRating)}
            size={30}
            activeColor="#ffd700"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchText;
