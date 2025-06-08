import {
  createAction,
  createFeature,
  createReducer,
  createSelector,
  on,
} from "@ngrx/store";
import { initialState } from "./login.state";
import { loginActions } from "./login.action";

// Reducer
export const loginReducer = createReducer(
  initialState,
  on(loginActions.saveUsername, (state, { username }) => {
    localStorage.setItem("username", "hsimchi");
    return {
      ...state,
      username: username,
    };
  }),
  on(loginActions.getUsername, (state) => {
    let getUsername = localStorage.getItem("username") ?? "";
    return { ...state, username: getUsername };
  })
);

// Feature
export const counterFeature = createFeature({
  name: "login",
  reducer: loginReducer,
});

// Export selectors
export const { selectUsername, selectPassword } = counterFeature;
