import { useMutation } from 'react-query';
import { login } from '../services/UserService';

function useLogin() {
  return useMutation(login);
}

export default useLogin;
