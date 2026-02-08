import type { ApiClient } from "@finance/api-sdk";
import type { AuthTokens, LoginCredentials, RegisterData, User } from "./types";

export class AuthClient {
  constructor(private apiClient: ApiClient) {}

  login(credentials: LoginCredentials) {
    return this.apiClient.post<AuthTokens>("/auth/login", credentials);
  }

  register(data: RegisterData) {
    return this.apiClient.post<AuthTokens>("/auth/register", data);
  }

  logout() {
    return this.apiClient.post<void>("/auth/logout");
  }

  getProfile() {
    return this.apiClient.get<User>("/auth/profile");
  }

  refreshToken(refreshToken: string) {
    return this.apiClient.post<AuthTokens>("/auth/refresh", { refreshToken });
  }
}
