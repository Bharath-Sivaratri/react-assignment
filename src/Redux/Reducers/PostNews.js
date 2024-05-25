import { ADD_RESPONSE_DATA } from "../Actions/PostNews";

const initialState = {
  responseData: null,
};

const responseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESPONSE_DATA:
      return {
        ...state,
        responseData: action.payload,
      };
    default:
      return state;
  }
};

export default responseReducer;
