export interface AuthResponse {
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

export interface AuthFailedResponse {
  ok: boolean;
  msg: string;
}

export interface Message {
  from: string;
  to: string;
  message: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export interface RevalidateTokenResponse extends Omit<AuthResponse, "msg"> {}
