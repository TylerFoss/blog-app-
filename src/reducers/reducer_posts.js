import {FETCH_POSTS} from "../actions";

export defualt function(state = {}, action){
  swtich(action.type){
    case FETCH_POSTS:
    console.log(action.payload.data);
    default:
      return state;
  }
}
