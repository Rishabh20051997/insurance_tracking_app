interface IToken {
  authToken: string;
  refreshToken: string;
}

type IUser = {
  userName: string | undefined;
  id: string;
};


interface Authentication {
  data: {
    token: IToken;
    user: IUser;
    isLoggedIn: boolean | undefined;
    loginProcess: {
      isLoginInProcess: boolean;
      isLoginSuccess: boolean
    }
    registrationProcess: {
      isRegistrationInProcess: boolean
      isRegistrationSuccess: boolean
    }
  };
}

interface IOptionsParams {
  userName: string;
  password: string;
  userType?: string
}
