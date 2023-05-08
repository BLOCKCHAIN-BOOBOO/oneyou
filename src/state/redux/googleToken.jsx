import { SIGNIN, SIGNOUT } from "../actions/actionTypes";


// const InitialState={
//     userInfo:
    
// }

const googleToken=(state={name:sessionStorage.getItem("username")?sessionStorage.getItem("username"):null,token:sessionStorage.getItem("token")?sessionStorage.getItem("token"):null,email:sessionStorage.getItem("email")?sessionStorage.getItem("email"):null}
,action)=>{

switch (action.type) {
    case SIGNIN:
        console.log("googletoken store",action)
        return {state:action.payload} 

        case SIGNOUT:

        return {state:action.payload}

    default:
       return state
}

}

export default googleToken;