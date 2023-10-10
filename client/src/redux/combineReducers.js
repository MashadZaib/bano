
import usersReducer from "./User/internalUserReducer";
import authReducer from "./Auth/authReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'
const middleware = [thunk]

const reducer = combineReducers({
  auth : authReducer,
  internalUsers : usersReducer,

});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
