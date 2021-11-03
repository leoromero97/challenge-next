import { createContext, useContext, useReducer, ReactNode, Dispatch } from 'react';

const LoginContext = createContext<{state: State, dispatch: Dispatch<Action>} |  undefined>(undefined);

type Action = {type: 'setToken', payload: string}
type State = {token: string}
type LoginProviderProps = {children: ReactNode}

function loginReducer(state: State, action: Action) {
  switch (action.type) {
    case 'setToken': {
      return {token: action.payload}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function LoginProvider({children}: LoginProviderProps) {
  const [state, dispatch] = useReducer(loginReducer, {token: ''})
  const value = {state, dispatch};

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
   )
}

function useAuthContext() {
  const context = useContext(LoginContext)
  if (context === undefined) {
    throw new Error('useAuthContext must be used within a LoginProvider')
  }
  return context
}

export {LoginProvider, useAuthContext}
