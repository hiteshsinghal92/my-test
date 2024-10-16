import { useRenderCount } from '@uidotdev/usehooks';
import React, { Suspense,  useEffect, useState, useTransition } from 'react'
import Post from './post';
import Header from './Common/Header';

const Batch = () => {
const [count,setCount] = useState(3);
const [value,setValue] = useState("");
const rendering = useRenderCount();
const [isPending, startTransation] = useTransition();

const [mCount,setMCount] = useState(4);


useEffect(()=>{
console.log("mCount",mCount);
console.log("Count",count);
return () => {
  console.log("UnMount Mian Count",mCount);
  console.log("UnMount Count",count);

}
},[count, mCount])

const handleChange = (e) => {
  setValue(e.target.value);
  startTransation(()=>{
    setCount(count+1);
  })
}

  return (
    <>
     <Header/>
   <p> Count : {count}</p>
   <p> MCount : {mCount}</p>
   <p> value : {value}</p>  
   <p>Render : {rendering}</p>
   <p>{isPending ? "Loader" : "loaded"}</p>
    <input type='text' onChange={handleChange}/><br/>
    <input type='text' onChange={() =>setMCount(mCount+1)}/>
    <Suspense fallback={"Loader"}>
      <Post/>
    </Suspense>
    </>
  )
}

export default Batch;
