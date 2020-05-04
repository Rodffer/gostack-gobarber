import { createContext } from 'react';

interface AuthContextState {
  name: string;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

export default AuthContext;
