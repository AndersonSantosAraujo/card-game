import { createContext, useState } from "react";

export const UserContext = createContext({} as any);

export const UserStorage = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string>();

  // Seta o nome do usuário
  function handleUser(name: string) {
    setUser(name);
  }

  return (
    <UserContext.Provider value={{ user, handleUser }}>
      {children}
    </UserContext.Provider>
  );
};
