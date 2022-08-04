export interface LoginResponse {
  ok: boolean;
  msg?: string;
  user?: User;
  errors?: LoginErrors;
  token?: string;
}

export interface User {
  name: string;
  email: string;
  online: boolean;
  uid: string;
}

export interface LoginErrors {
  email: FieldError;
  password: FieldError;
}

export interface FieldError {
  value: string;
  msg: string;
  param: string;
  location: string;
}
