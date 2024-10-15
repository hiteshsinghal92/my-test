import { useRenderCount } from '@uidotdev/usehooks';
import React, { Suspense, useDeferredValue, useEffect, useState, useTransition } from 'react'
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
},[])

const handleChange = (e) => {
  setValue(e.target.value);
  //startTransation(()=>{
    setCount(count+1);
  //})
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



// const Batch = () => {
// const [count,setCount] = useState(0);
// const [text,setText] = useState('');
// //const [list, setList] = useState([]);
// const [input, setInput] = useState('');
// const [input1, setInput1] = useState('');
// const [isPending,startTransation] = useTransition();

// const deferredInput = useDeferredValue(input1);

// const list = Array.from({ length: 20000 }, (_, i) => deferredInput + i);

// // const handleChange = (e) => {
// //     setInput(e.target.value);

// //     // Simulate a heavy computation // Concurrent Rendering
// //    startTransation(()=>{ // Set this code not priority
// //     const newList = Array.from({ length: 20000 }, (_, i) => e.target.value + i);
// //     setList(newList);
// //     })
// // };

// const renderCount = useRenderCount();
// // Automated Batching only single rendering only
// const handleClick = () => {
//     setCount(count+1);
//     setText("Hello")
// }

//   return (

//     <>
//     {Math.random()}
//     <p>Count: {count}</p>
//     <p>Text: {text}</p>
//     <p>Render Count: {renderCount}</p>
//     <button type='button' onClick={handleClick}>Click</button>
    
//     <div>
//             {/*     <input type="text" value={input} onChange={handleChange} /> */}

//             <input type="text" value={input1} onChange={(e) => setInput1(e.target.value)} />

//             <br/>
//             {isPending ? "Loading..." : "Show"}
//             <ul>
//                 {list.map((item, index) => (
//                     <li key={index}>{item}</li>
//                 ))}
//             </ul>
//         </div>
//     </>
//   )
// }

// export default Batch