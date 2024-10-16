import React, { memo, useCallback, useContext, useMemo, useReducer, useState } from 'react'
import DataContext from '../Context/dataContext';
import UpdateHoc from '../HOC/updateHoc';

export const TestD = UpdateHoc(({upateD}) => {
const [count,setCount] = useState(0);
const [counter,setCounter] = useState(0);

const dispatchEvent = (state,action) =>{
    if(action.type === "add"){
        return 3;
    }

}


const [state,dispatch] = useReducer(dispatchEvent,0);



const handleClick = useCallback(() => {
    setCount(prv => prv+1);
},[])

const countData = useMemo(()=>{
    return (
    <>
    <p>Count : {count} - {Math.random()}</p>
    <button onClick={handleClick}>Click - {Math.random()}</button>
    </>
)},[count, handleClick]);


const counterData = useMemo(()=>{
    return (
        <>
        <p>Counter : {counter} - {Math.random()}</p>
        <p>{upateD("hello")}</p>
        <button onClick={()=> setCounter(counter+1)}>Click - {Math.random()}</button>
        </>
    )
},[counter, upateD])


  return (
    <>
    <DataContext.Provider value={{counter,setCounter}}>
    {countData}
    {counterData}
    <br/>
    <p>State: {state}</p>
    <button onClick={()=> dispatch({type:"add"})}>Click - {Math.random()}</button>
    <br/>
   <ChildTest count={count} handleClick={handleClick}/>
   </DataContext.Provider>
    </>
  )
});


const ChildTest = memo(({count,handleClick}) => {
    const {counter} = useContext(DataContext);

    return (<>
    hello -{count} - {counter} - {Math.random()}
    </>)
});