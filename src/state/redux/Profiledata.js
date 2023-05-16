import { PROFDATA } from "../actions/actionTypes";

const Profiledata = (state = {}, action) => {
  switch (action.type) {
    case PROFDATA:
      return { state: action.payload };

    default:
      return state;
  }
};
export default Profiledata;
