import { createContext, Dispatch, SetStateAction } from 'react';

export const LoginContext = createContext<{token: string, setToken: Dispatch<SetStateAction<string>>} |  undefined>(undefined);
