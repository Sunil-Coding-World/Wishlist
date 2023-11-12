import React, { useState, useEffect } from "react";
import "./Read.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteWish, showWish } from "../../APi/InputSlice";
import CustomModel from "../custom model/CustomModel";
import { Link } from "react-router-dom";
import Edit from "../edit/Edit";

const Read = () => {
  const dispatch = useDispatch();
  const [id, setid] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const { wish, loading } = useSelector((state) => state.app);

  const [showPopUp, setshowPopUp] = useState(false);

  useEffect(() => {
    dispatch(showWish());
  }, [dispatch]);

  const handleDeleteWish = (wishId) => {
    setIsLoading(true);
    dispatch(deleteWish(wishId)).then(() => {
      setIsLoading(false);
      dispatch(showWish());
    });
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {/* popup when click in view */}
      {showPopUp && (
        <CustomModel
          id={id}
          showPopUp={showPopUp}
          setshowPopUp={setshowPopUp}
        />
      )}


      <div className="read-container">
        <h2 className="read-heading">Your Wishes</h2>
        <div className="wish-list">
          {wish.map((e) => (
            <div key={e.id} className="read-item">
              <h3>{e.wish}</h3>
              <div className="btn-container">
                <button
                  className="btn"
                  onClick={() => {
                    setid(e.id);
                    setshowPopUp(true);
                  }}
                >
                  View
                </button>
                <Link to={`/edit/${e.id}`} className="btn">
                  Edit
                </Link>
                <button
                  className="btn"
                  onClick={() => handleDeleteWish(e.id)}
                  disabled={isLoading}
                >
                  {isLoading ? "Deleting..." : "Delete"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Read;
