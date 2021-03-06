export const FETCH_POSTS = "fetch_posts";
export const CREATE_POST = "create_posts";
export const FETCH_POST ="fetch_post";
export const DELETE_POST = "delete_post";
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

export function createPost(values, callback){
  // the second argument is the data being sent to the API
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());
  return {
    type: CREATE_POST,
    payload: request
  }
}

export function fetchPost(id){
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
  return{
    type: FETCH_POST,
    payload: request
  }
}

export function deletePost(id, callback){
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());
  return{
    type: DELETE_POST,
    payload: id
  }
}
