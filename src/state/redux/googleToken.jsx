import { SIGNIN } from "../actions/actionTypes";


const InitialState={
    userInfo:
        {name:sessionStorage.getItem("username")?sessionStorage.getItem("username"):null,token:sessionStorage.getItem("token")?sessionStorage.getItem("token"):null,email:sessionStorage.getItem("email")?sessionStorage.getItem("email"):null}
    
}

const googleToken=(state=InitialState,action)=>{

switch (action.type) {
    case SIGNIN:
        console.log("googletoken store",action)
        return state 

    default:
       return state
}

}

export default googleToken;