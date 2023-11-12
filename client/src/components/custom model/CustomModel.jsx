import React from "react";
import "./CustomModelStyle.css";
import { useSelector } from "react-redux";

const CustomModel = ({ id, showPopUp, setshowPopUp }) => {
  const AllWish = useSelector((state) => state.app.wish);
  const Singlewish = AllWish.filter((e) => e.id === id);

  console.log(Singlewish[0].wish);

  return (
    <div className="modelbackground">
      <div className="modelcontainer">
        <button onClick={() => setshowPopUp(false)}>close</button>
        <h2>{Singlewish[0].wish}</h2>
      </div>
    </div>
  );
};

export default CustomModel;
