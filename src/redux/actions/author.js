import { FETCH_AUTHOR_DETAIL} from "./actionTypes";

import axios from "axios";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

export const fetchAuthorDetail = authorID => async dispatch => {
  const res = await instance.get(`/api/authors/${authorID}`);
  const author = res.data;;
  dispatch({ type: FETCH_AUTHOR_DETAIL, payload: author });
};
