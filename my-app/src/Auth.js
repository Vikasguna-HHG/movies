import React, { useContext } from "react";
import AppContext from "./Context";
import {Redirect, Route} from "react-router-dom";

function Auth(props){

    const { login } = useContext(AppContext)

    if(login){
        return (<Route {...props} />)
    }

    return (<Redirect to="/" />)

}

export default Auth