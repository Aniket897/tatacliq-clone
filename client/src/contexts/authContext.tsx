import { createContext, useContext, useEffect, useState } from "react";
import axios from "../axios";
import { UserData } from "../types";

type authContextType = {
  loading: boolean;
  isAuth: boolean;
  userData: UserData | undefined;
};
const authContext = createContext<authContextType>({} as authContextType);

export const useAuth = () => {
  return useContext(authContext);
};

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<UserData>();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    initAuth();
  }, []);

  const initAuth = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/auth/me");
      console.log(response);
      setIsAuth(true);
      setUserData(response.data.user.profile);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <authContext.Provider value={{ loading, isAuth, userData }}>
      {children}
    </authContext.Provider>
  );
}
