import React, { useState } from "react";
import "./Input.css";
import { useDispatch } from "react-redux";
import { createWish } from "../../APi/InputSlice";
import { useNavigate } from "react-router-dom";

const Input = () => {
  const [wish, setWish] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getuserdata = (e) => {
    setWish({ ...wish, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!wish.wish || wish.wish.trim() === "") {
      setErrorMessage(<h3 style={{color:"yellow"}}>Please enter a wish before adding.</h3>);
    } else {
      dispatch(createWish(wish));
      navigate("/read");
    }
  };

  return (
    <form className="header" onSubmit={handleSubmit}>
      <div className="input-add">
        <h2>Make A Wish</h2>
        <input
          type="text"
          id="myInput"
          name="wish"
          placeholder="I will fulfill your wishes..."
          onChange={getuserdata}
        />
        <button type="submit" className="addBtn">
          Add
        </button>
        <p className="error-message">{errorMessage}</p>
      </div>
    </form>
  );
};

export default Input;
