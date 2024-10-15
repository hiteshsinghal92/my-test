import React,{useState,} from "react";
import usePaginate from "./usePaginate";
const PageIn = () => {

    const [pageIndex, setPageIndex] = useState(1);
    const [isLoading,error,data] = usePaginate(pageIndex);
   
   return (<>
   
        {!isLoading && data && data.map((list,index)=>
            <ul key={index}>
            {list.name}
            </ul>
        )}
   <button onClick={() => setPageIndex(pageIndex+1)}>Next</button>     
   </>
   )

}
export default PageIn;