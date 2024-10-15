const HOC = (Component) => {
const MyCheck = (props) => {
    return <Component{ ...props}/>
}

    return MyCheck;
}

export default HOC;