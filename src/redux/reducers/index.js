import { combineReducers } from "redux";

import authorReducer from "./author";
import authorsReducer from "./authors";

const rootReducer = combineReducers({
  rootAuthor: authorReducer,
  rootAuthors: authorsReducer
});

export default rootReducer;
