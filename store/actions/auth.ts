import { ThunkDispatch } from "redux-thunk";
import { State } from "../states/auth";
import { ENV } from "../../constants/env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const SIGN_UP = "SIGN_UP";

export type SignInAction = {
  type: typeof SIGN_IN;
  payload: {
    token: string;
    userId: string;
  };
};

export type SignOutAction = {
  type: typeof SIGN_OUT;
};

export type SignUpAction = {
  type: typeof SIGN_UP;
  payload: {
    token: string;
    userId: string;
  };
};

export type AuthAction = SignInAction | SignOutAction | SignUpAction;

export const signUp = (email: string, password: string) => {
  return async (dispatch: ThunkDispatch<State, null, SignUpAction>) => {
    const response = await fetch(
      `${ENV.firebaseAuthUrl}signUp?key=${ENV.firebaseApiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      }
    );

    if (!response.ok) {
      console.log(response);
      throw new Error("Something went wrong!");
    }

    const data = await response.json();

    dispatch({
      type: SIGN_UP,
      payload: {
        token: data.idToken,
        userId: data.localId,
      },
    });
    await AsyncStorage.setItem(
      "userData",
      JSON.stringify({
        token: data.idToken,
        userId: data.localId,
      })
    );
  };
};

export const signIn = (email: string, password: string) => {
  return async (dispatch: ThunkDispatch<State, null, SignInAction>) => {
    const response = await fetch(
      `${ENV.firebaseAuthUrl}signInWithPassword?key=${ENV.firebaseApiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      }
    );

    if (!response.ok) {
      console.log(response);
      throw new Error("Something went wrong!");
    }

    const data = await response.json();

    dispatch({
      type: SIGN_IN,
      payload: {
        token: data.idToken,
        userId: data.localId,
      },
    });
    await AsyncStorage.setItem(
      "userData",
      JSON.stringify({
        token: data.idToken,
        userId: data.localId,
      })
    );
  };
};

export const signOut = () => {
  return async (dispatch: ThunkDispatch<State, null, SignOutAction>) => {
    dispatch({
      type: SIGN_OUT,
    });
    await AsyncStorage.removeItem("userData");
  };
};
