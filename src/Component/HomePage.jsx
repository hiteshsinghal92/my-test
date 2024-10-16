import { useEffect, useRef, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { bindActionCreators } from "@reduxjs/toolkit";
import { getUserAction, updateName } from "../store/userSlice";
import Header from "./Common/Header";
import Worker from "./Worker";
import MyButton from "./Common/MyButton";

const mapStateToProps = (state) => ({
  data: state,
});

const mapDispatchToProps = (dispatch) => ({
  updateName: bindActionCreators(updateName, dispatch),
  getUserAction: bindActionCreators(getUserAction, dispatch),
});

const HomePage = ({ data, updateName, getUserAction }) => {
  const inputRef1 = useRef();
  const [value, setValue] = useState("");
  const [set, setTick] = useState(1);

  const dispatch = useDispatch();
  const handleSubmit = () => {
  
    setTick((tick) => tick + 1);

    updateName("hitesh");
  };
  useEffect(() => {
    // updateName("hitesh")
    getUserAction(set);
    return () => {
      //console.log("unmount");
      dispatch({ type: "CANCEL_FETCH" });
    };
  }, [dispatch, getUserAction, set]);
  return (
    <>
      <Header/>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />{" "}
      {Math.random()}
      <input type="text" ref={inputRef1} />
      <button type="button" onClick={handleSubmit}>
        Click New
      </button>
      <br />
      <NavLink to={"/count"}>count</NavLink>
      {JSON.stringify(data.user.data)}
      <Worker/>
      <MyButton/>
    </>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
