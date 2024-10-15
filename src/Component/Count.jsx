import { memo, useCallback, useContext, useEffect, useMemo, useState } from "react";


import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import MyCountContext from "../Context/myContext";
import HOC from "../HOC";

const CommonButton = memo(({ value, fun }) => {
  return <button onClick={fun}>Add - {Math.random()}</button>;
});

const Count = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  //
  const [ countT, setCountT ] = useContext(MyCountContext);

  // Dom Update
  useLayoutEffect(()=>{
    console.log("useLayoutEffect",count);
  },[count]);
  // Brower Repaint

  // DOm Update
  // Brower Repaint
  useEffect(()=>{
    console.log("useEffect",count);
  },[count]);

  const countV = useMemo(() => {
    return (
      <>
        Count:{count} - {Math.random()}
        <br />
      </>
    );
  }, [count]);

  const ValueV = useMemo(() => {
    return (
      <>
        value:{value} - {Math.random()}
        <br />
      </>
    );
  }, [value]);

  const fun = useCallback(() => {
    setCount((PCount) => PCount + 1);
  }, []);
  const navi = useNavigate();
  const handleRedirect = () => {
    
    navi("/",{ state: "data"});
  }

  return (
    <>
      Conetxt {countT} <br />
      {countV}
      {ValueV}
      <br />
      <CommonButton value={count} fun={fun} />
      <button onClick={() => setValue(value + 1)}>
        Add Value - {Math.random()}
      </button>
      <button onClick={() => setCountT(countT + 1)}>
        Add Count - {Math.random()}
      </button>

      <button onClick={handleRedirect}>Click to Redirect</button>
    </>
  );
};


export default HOC(Count);
