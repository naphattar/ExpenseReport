import React, { createContext, useCallback,useState } from "react";
import { User } from "../types/User";
import useGetProfile from "../hooks/useGetProfile";

interface AuthContextType {
  user: User | null; 
  isAuthenticated: boolean;
  loading: boolean;
  fetchUserProfile: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const getProfile = useGetProfile();

  const fetchUserProfile = useCallback(async () => {
    setLoading(true);
    try {
      const profile = await getProfile();
      if (profile) {
        const user: User = {
          userid: profile.userid,
          username: profile.username,
        };
        setUser(user);
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
    } finally {
      setLoading(false);
    }
  }, [getProfile]);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loading, fetchUserProfile }}>
      {children}
    </AuthContext.Provider>
  );
};
