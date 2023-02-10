import { USER_ACTION_TYPES } from "./user.types";


 const INITIAL_STATE = {
    currentUser: null,
 }
 
 export const userReducer =(state=INITIAL_STATE,action) =>{
  
    const {type, payload} = action;
 
    switch(type) {
       case USER_ACTION_TYPES.SET_CURRENT_USER :                                      //'SET_CURRENT_USER'
       return{
          ...state,
          currentUser: payload
       }
 
 
       //occurs when no case satisfies
       default:{
       return state;
       }
    }
 
 }
 
//javascript in plain english

//5 custom react hooks that will transform your code
 