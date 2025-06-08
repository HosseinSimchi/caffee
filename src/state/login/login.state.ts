export interface LoginState {
  username: string;
  password: string
}

export const initialState: LoginState = {
  username: "",
  password: "",
};
