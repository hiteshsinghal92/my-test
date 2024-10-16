
import useFetch from "../Hooks/useFetch";
import { FixedSizeList as List } from 'react-window';
const Post = () => {
    const [isLoading,error,data] = useFetch('https://jsonplaceholder.typicode.com/photos');
  //  const [currentPage,setCurrentPage] = useState(1);
  //  const itemPerPage = 10;

    // Calculate
   // const indexofLastItem  = currentPage * itemPerPage;
    // const indexOfFirstItem  = indexofLastItem - itemPerPage;
    // const currentData = data.slice(0,indexofLastItem);

    // const handleNext = () => {
    //     setCurrentPage(currentPage+1)
    // }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const Row = ({ index, style }) => (
        <div style={style}>
            {data[index]?.title} - {index}
        </div>
    );

    return (
        <List
            height={500}
            itemCount={data.length}
            itemSize={35}
            // width={300}
        >
            {Row}
        </List>
    );

    // return (
    //     <>
    //    <div className="">
    //     {isLoading && "Loader"}
    //     {error && error}
    //     {/* {currentData && currentData.map((list,index)=>
    //         <ul key={index}>
    //             <li>{index+1}-{list.userId}</li>
    //         </ul>
    //     )}
    //     <button onClick={handleNext}>Next</button> */}
    //     {Example}
    //    </div>
    //     </>
    // )
   
}

export default Post;