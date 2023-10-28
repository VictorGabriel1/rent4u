import React, { createContext, useCallback, useEffect, useState } from "react";
import { MMKV } from "react-native-mmkv";

type AuthProps = {
  logIn: ({ password, email }: Credentials) => boolean;
  logOut: () => void;
  signUp: ({
    name,
    email,
    password,
    cpf,
    bDay,
    cnh,
  }: SignUpCredentials) => Promise<string>;
  authenticated: boolean;
};

export interface Credentials {
  email: string;
  password: string;
}

export interface SignUpCredentials extends Credentials {
  name: string;
  cpf: string;
  bDay: string;
  cnh: string;
}

export interface User extends Credentials, SignUpCredentials {
  id: Number;
  registerDate: Date;
}

export const AuthContext = createContext<AuthProps>({
  logIn: () => false,
  logOut: () => {},
  signUp: async () => "",
  authenticated: false,
});

const storage = new MMKV({ id: "users" });

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  async function signUp({
    name,
    email,
    password,
    cpf,
    bDay,
    cnh,
  }: SignUpCredentials) {
    const usersQuantity = storage.getAllKeys();

    const usersArray: User[] = usersQuantity.map((_user, i) => {
      const userObj = storage.getString(`user-${i + 1}`);
      if (userObj) return JSON.parse(userObj);
    });

    console.log(usersArray);

    const currentUserLogging = usersArray.find((user) => user.email === email);

    if (currentUserLogging) return "Usuario já existe!";

    storage.set(
      `user-${usersQuantity.length + 1}`,
      JSON.stringify({ name, email, password, cpf, bDay, cnh })
    );
    return "Usuario criado!";
  }

  function logIn({ email, password }: Credentials) {
    console.log(email);
    const usersQuantity = storage.getAllKeys();
    // storage.clearAll();
    const usersArray: User[] = usersQuantity.map((_user, i) => {
      const userObj = storage.getString(`user-${i + 1}`);
      if (userObj) return JSON.parse(userObj);
    });

    const currentUserLogging = usersArray.find(
      (user) => user.email === email && user.password === password
    );

    if (currentUserLogging) {
      storage.set("currentUser", JSON.stringify(currentUserLogging));
      setAuthenticated(true);
      return true;
    }

    return false;
  }

  function logOut() {
    setAuthenticated(false);
    storage.delete("currentUser");
  }

  return (
    <AuthContext.Provider
      value={{
        logIn,
        logOut,
        signUp,
        authenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
