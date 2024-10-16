import { useState,useEffect } from "react";
import PostHoc from "./PostHoc";

const PostData = ({capitalizeTitle}) => {
const [data,setData] = useState([]);
const [error,setError] = useState("");
/**
 * 
 */


    useEffect(()=>{
        const getData = async () => {
            try {
                const res = await fetch("https://dummyjson.com/products");
                const result  = await res.json();
               
                if(res.ok){
                    const capitalizeData = capitalizeTitle(result.products);
                    setData(capitalizeData);
                }
            } catch (error) {
                setError(error)
            }
        }
        getData()
    },[capitalizeTitle]);

    return (
        <>
        {error && error}
        <table>
            <thead>
                <th>
                    Name
                </th>
                <th>
                    Description
                </th>
            </thead>

        <tbody>
            {data && data.map((list,index)=>
            <tr key={index}>
                <th>{list.title}</th>
                <th>{list.description}</th>
            </tr>
            )}
        </tbody>

        </table>
        </>
    )
}
export default PostHoc(PostData);