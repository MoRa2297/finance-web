"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";
import type { AuthClient } from "./auth-client";
import type { AuthState, LoginCredentials, RegisterData, User } from "./types";

interface AuthContextValue extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

interface AuthProviderProps {
  children: ReactNode;
  authClient: AuthClient;
  onTokensReceived: (accessToken: string, refreshToken: string) => void;
  onTokensCleared: () => void;
  getStoredToken: () => string | null;
}

export function AuthProvider({
  children,
  authClient,
  onTokensReceived,
  onTokensCleared,
  getStoredToken,
}: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const isAuthenticated = user !== null;

  useEffect(() => {
    const token = getStoredToken();
    if (token) {
      authClient
        .getProfile()
        .then(setUser)
        .catch(() => {
          onTokensCleared();
          setUser(null);
        })
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, [authClient, getStoredToken, onTokensCleared]);

  const login = useCallback(
    async (credentials: LoginCredentials) => {
      const tokens = await authClient.login(credentials);
      onTokensReceived(tokens.accessToken, tokens.refreshToken);
      const profile = await authClient.getProfile();
      setUser(profile);
    },
    [authClient, onTokensReceived],
  );

  const register = useCallback(
    async (data: RegisterData) => {
      const tokens = await authClient.register(data);
      onTokensReceived(tokens.accessToken, tokens.refreshToken);
      const profile = await authClient.getProfile();
      setUser(profile);
    },
    [authClient, onTokensReceived],
  );

  const logout = useCallback(async () => {
    try {
      await authClient.logout();
    } finally {
      onTokensCleared();
      setUser(null);
    }
  }, [authClient, onTokensCleared]);

  const value = useMemo(
    () => ({ user, isAuthenticated, isLoading, login, register, logout }),
    [user, isAuthenticated, isLoading, login, register, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
