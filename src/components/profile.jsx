import React from 'react'
import {useSelector} from 'react-redux'


function Profile(){
    const user=useSelector((state)=>state.user.value)
    // user ki values extract karenge
    return(
        <div>
            <h1>Profile</h1>
            <p>name:{user.name}</p>
            <p>age:{user.age}</p>
            <p>email:{user.email}</p>

        </div>
    )
}

export default Profile