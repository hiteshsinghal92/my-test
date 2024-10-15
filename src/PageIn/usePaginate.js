import React,{useEffect, useState} from "react";
const usePaginate = (pageIndex) => {
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState("");
    const [data,setData] = useState([]);
    
    useEffect(()=>{
        const callData = async () => {
            try{
                setIsLoading(true);
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                const result = await res.json();
                setData(result)
               } catch (error) {
                  setError(error) 
               }
               finally{
                   setIsLoading(false);
               }
        }
        callData();
    },[pageIndex]);

    
    return [isLoading,error,data]
    
}

export default usePaginate;