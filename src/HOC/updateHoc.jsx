

const UpdateHoc = (Component) => {

    const testData = (...props) => {

        const upateD = (value) => {
            return value+1
        }

        return <Component {...props} upateD={upateD}/>
    }

    return testData;
}

export default UpdateHoc;
