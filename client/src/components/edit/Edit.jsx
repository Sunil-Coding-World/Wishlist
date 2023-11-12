import React, { useEffect } from 'react';
import './EditStyle.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updatewish } from '../../APi/InputSlice';


const Edit = () => {

  const navigate = useNavigate();


  const dispatch = useDispatch();
  
  const { id } = useParams();

  const [update, setUpdate] = useState();

  const { wish } = useSelector((state) => state.app);

  useEffect(() => {
    if (id) {
      const singleWish = wish.find((e) => e.id === Number(id));
      setUpdate(singleWish);
    }
  }, [id, wish]);


  const newdata = (e) => {
    setUpdate({ ...update , [e.target.name]: e.target.value });
  };

  const handleupdate = (e) => {
    e.preventDefault();
    dispatch(updatewish(update))
    navigate("/read")
    };

  console.log(update);

  return (
    <div>
      <form className="edit-form" onSubmit={handleupdate}>
        <div className="edit-container">
          <h2>Update Your Wish</h2>
          <input type="text" id="myInput" value={update && update.wish} onChange={newdata} name="wish" />
          <button type="submit" className="addBtn">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
