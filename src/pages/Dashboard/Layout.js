import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import globeVar from "../../GlobalVar";
import "./Layout.css";
import OptionBar from "./OptionBar";

export default function DashboardLayout() {
  const navigate = useNavigate();

  // useParam for option name
  let { optionName } = useParams();

  console.log(optionName);

  // useEffect for Local storage
  useEffect(() => {
    if (localStorage.length) {
      if (
        localStorage.getItem("email") !== globeVar.Gmail ||
        localStorage.getItem("password") !== globeVar.Pass
      ) {
        console.log("hi");
        //  history.push("/login");
        navigate("/login");
      }
    } else {
      //  history.push("/login");
      navigate("/login");
    }
  }, []);

  //function for click option
  const clickOption = (props) => {
    console.log("this is option : ", props);
  };

  return (
    <div>
      <div className="d-flex">
        <div className="left-side-bar">
          <OptionBar clickOption={clickOption}></OptionBar>
        </div>
        <div className="right-side-bar">
          <div>
            <div className="">
              <h1>{optionName}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
