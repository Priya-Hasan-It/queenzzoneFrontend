import React from "react";
import { Link } from "react-router-dom";
import { ClipBoard, HandbagFill, Heart, HomeFill, UserTie } from "../../svg";

const BottomNavigation = () => {
  return (
    <nav className="fixed-bottom bg-darkBlue ">
      <div className="mx-auto w-100 py-3 d-flex justify-content-around align-items-center">
      <div className="col-xs-2 d-flex justify-content-around">
      <HomeFill color='#CAF0F8' width='50%' height='50%'  />

      </div>
      <div className="col-xs-2 d-flex justify-content-around">
      <Heart color='#48CAE4' width='50%' height='50%'  />
      </div>
      <div className="col-xs-2 d-flex justify-content-around">
      <HandbagFill color='#48CAE4' width='50%' height='50%'  />
      </div>
      <div className="col-xs-2 d-flex justify-content-around">
      <ClipBoard color='#48CAE4' width='35%' height='35%'  />
      </div>
    
      <div className="col-xs-2 d-flex justify-content-around align-items-center">
      <Link className="w-100 d-block " to ="/profile">
      <UserTie color='#48CAE4' width='50%' height='50%'  />
      </Link>
      </div>
      
      </div>
    </nav>
  );
};

export default BottomNavigation;
