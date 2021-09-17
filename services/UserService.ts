import api from "../config/api";
import { IUserLoginData, IUserLoginResponse } from "../interfaces/IUser";

export const login = (dataLogin: IUserLoginData) => 
  api.post<IUserLoginResponse>('/login', dataLogin).then(res => res.data);
