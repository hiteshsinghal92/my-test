import {  useEffect } from "react";

const CheckHooks = () => {
const count = 0;


    const handleUpdate = async () => {
        try {
            const da = await fetch("https://jsonplaceholder.typicode.com/todos/1");
             if(da.status === 200){
                const res = await da.json();
               return () =>{
                return res;
               }
            } else {
                throw (da.message);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        handleUpdate((res)=>{
            console.log(res)
        })
    },[])
    return (
        <>
        Count : {count} 
        <button type="button">Button</button>
        </>
    )
}

export default CheckHooks;