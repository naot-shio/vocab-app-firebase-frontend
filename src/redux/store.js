import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import userReducer from "./reducers/userReducer";
import dataReducer from "./reducers/dataReducer";
import uiReducer from "./reducers/uiReducer";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  user: userReducer,
  data: dataReducer,
  UI: uiReducer
});

let store;

if (window.navigator.userAgent.includes('Chrome')) {
  store = createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
} else {
  store = createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(...middleware)
    )
  );
}


export default store;
