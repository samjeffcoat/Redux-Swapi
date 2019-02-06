import /* we need our action types here*/ "../actions";
const initialState = {
  characters: [],
  isLoading: false,
  error: ""
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
    return{
      ...state,
      isLoading:true
    };
    case FETCH_SUCCESS:
    return {
      ...state,
      isLoading:false
    }
    case FETCH_ERROR:
    return {
      ...state,
      error: action.payload,
      isLoading:false
    }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
