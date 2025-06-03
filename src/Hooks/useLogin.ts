import { useMutation } from "@tanstack/react-query";
import axios from "axios";


export interface LoginPayload {
  username: string;
  password: string;
  token: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  accessToken?: string;
}

const loginUser = async (data: LoginPayload): Promise<LoginResponse> => {
  const response = await axios.post("/api/auth/login", data);
  return response.data;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: loginUser,
  });
};
