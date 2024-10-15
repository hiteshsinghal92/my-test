import { useRef, useState } from "react";
import IChild from "./IChild";

const Imperative = () => {
const inputRef = useRef(null);
const [childFunction,setChildFunction] = useState(null)

const handleStart = () => {
    inputRef.current.handleStart();
}

const handleStop = () => {
    inputRef.current.handleStop();
}

return(
    <div>
        <h1>Parent Component</h1>
        <IChild ref={inputRef} triggerFunction={setChildFunction}/>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={()=>{childFunction && childFunction()}}>Play</button>
            {/* <button onClick={() => { childFunction && childFunction(); }}>Play</button> */}
    </div>
)


}
export default Imperative;