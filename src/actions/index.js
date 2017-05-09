export const FETCH_POSTS = "fetch_posts";
import axios from "axios";
const ROOT_URL = "	http://reduxblog.herokuapp.com/api";
// the key needs to be inside of a query string "?"
const API_KEY = "?key=PAPERCLIP1234";
export function fetchPosts(){
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return{
    type: FETCH_POSTS,
    payload: request
  };
}
