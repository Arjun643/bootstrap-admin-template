export type ValidationErrorItem = {
  path: string;
  message: string;
};

export type ValidationError = {
  inner: ValidationErrorItem[];
};

export type ApiError = {
  response: {
    data: {
      message: string;
    };
  };
};

export interface LoginDetailsError {
  username?: string;
  password?: string;
}

export interface LoginData {
  username: string;
  password: string;
}
