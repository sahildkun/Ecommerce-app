import { createContext , useState , useReducer,useEffect} from "react";
import { onAuthStateChangedListener ,createUserDocumentFromAuth} from "../utils/firebase/firebase.utils";

//as the actual value u want to access

export const UserContext = createContext();


// A MORE STRUCTURED APPROACH OF KEEPING TRACK OF ACTIONS USING AN OBJECT MODEL
export const USER_ACTION_TYPES ={
   SET_CURRENT_USER: 'SET_CURRENT_USER'
}

export const userReducer =(state,action) =>{
   console.log('dispatched');
   console.log(action);
   const {type, payload} = action;

   switch(type) {
      case USER_ACTION_TYPES.SET_CURRENT_USER :                                      //'SET_CURRENT_USER'
      return{
         ...state,
         currentUser: payload
      }


      //occurs when no case satisfies
      default:{
      throw new Error(`Unhandled type ${type} in userReducer function`)
      }
   }

}

const INITIAL_STATE = {
   currentUser: null,
}

export const UserProvider = ({children}) => {
   // const [currentUser, setCurrentUser] = useState(null);

   const [{currentUser},dispatch] = useReducer(userReducer,INITIAL_STATE)
 
 
   console.log(currentUser);
 
 
   const setCurrentUser = (user) =>{
    dispatch({type:USER_ACTION_TYPES.SET_CURRENT_USER, payload: user});
   }

   const value = { currentUser , setCurrentUser };

   useEffect(() => {
      const unsubscribe = onAuthStateChangedListener((user) => {
         if(user) {
          createUserDocumentFromAuth(user);
         }
         setCurrentUser(user)
         // console.log(user);
      });

      return unsubscribe;
   },[])

   return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

/* 
REDUCERS

const useReducer = (state,action) => {

   return (  

      currentUser :
   )
}

the state and the action will modulate any change  in value of current user

simply sayib reducer is a function alike that returns a object
the action comprises of type and payload and payload is gonna tell the new updated value

to use use reducers we have use reducer hook....
*/