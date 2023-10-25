export interface Profile {
  username: string;
  email: string;
  avatar: string;
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export interface ILoginResponse {
  tokens: Tokens;
  user: Profile;
}
