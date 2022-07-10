import axios from "axios";

const user_url = "https://api.postexpired.com/users";

//USERS
//POST
export const createUser = (new_user) => axios.post(`${user_url}/create`, new_user);

//GET
export const getUserByGoogleId = (goog_id) => axios.get(`${user_url}/${goog_id}`);

//PATCH