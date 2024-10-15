import { useReducer } from "react";

const Reducer = () => {

    const reducerFunction = (state,action) => {
        console.log(state,action)
        if(action.type === 'Add'){
            return {
                age : state.age+1
            }
        }

    }

    const [state,dispatch] = useReducer(reducerFunction,{age:32});

    return (
        <>
        <p>State : {state.age}</p>
        <button onClick={() =>{dispatch({type:"Add"})}}>Click</button>
        </>
    )
}


export default Reducer;