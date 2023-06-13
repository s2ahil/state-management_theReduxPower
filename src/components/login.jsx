import React from "react";
import {useDispatch} from "react-redux";
import {login} from "../features/user";
import {useSelector} from 'react-redux';
import {logout} from "../features/user";    


export default function Button(){
    
   const user=useSelector((state)=>state.user.value)
   const dispatch=useDispatch();

    return(
        <div>
            <button   style={user.color}    onClick={()=>{
                dispatch(login({name:"sahil"})),
                dispatch(login({color:{backgroundColor:"red"}}))
            }}>click me</button>

            <button onClick={()=>{
                 dispatch(logout())

            }}>logout</button>
        </div>
    )
}