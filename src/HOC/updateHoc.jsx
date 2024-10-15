import { retry } from "redux-saga/effects";

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

// pligins // loader

//cretical rendering
//broswe cashe e tag
// web vitak
