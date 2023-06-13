import {createSlice} from '@reduxjs/toolkit';

const initalValue={

    name:"kuch",
    age:"25",
    email:"kuch",
     color:{backgroundColor:"pink"}

}


const userSlice=createSlice({
    name:"user",

    initialState:{
        value: initalValue
    },

    reducers:{
        login:(state,action)=>{
            state.value=action.payload
        },

        logout:(state,action)=>{
            
            state.value={name:"",age:"",email:""}
        }
    }
})



export const {login}=userSlice.actions;
export const {logout}=userSlice.actions;

export default userSlice.reducer;

