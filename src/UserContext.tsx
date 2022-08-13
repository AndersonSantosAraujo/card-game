import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserStorage = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string>();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
