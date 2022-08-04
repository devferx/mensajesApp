export interface LoginResponse {
  ok: boolean;
  msg: string;
  user: User;
  token: string;
}

export interface User {
  name: string;
  email: string;
  online: boolean;
  uid: string;
}
