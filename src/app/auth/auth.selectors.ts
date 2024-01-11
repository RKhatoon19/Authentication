import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./reducers";

const selectAuthSelector = createFeatureSelector<AuthState>("auth");
export const isLoggedIn=createSelector(
    selectAuthSelector,
    (auth)=> !!auth.user

)
export const loggedOut=createSelector(
    isLoggedIn,
    (isLoggedin)=> !isLoggedin
)