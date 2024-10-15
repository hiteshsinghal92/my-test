import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectRoute = ({auth,children}) => {
    if(!auth){
        return <Navigate to="/count"/>
    }
  return children;
}

export default ProtectRoute;