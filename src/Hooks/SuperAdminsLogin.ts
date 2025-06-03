import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "./useAxios";


interface LoginData {
  token: string;
}

interface LoginResponse {
  success: boolean;
  accessToken: string;
  message?: string;
}

export const useLogin = () => {
  return useMutation<LoginResponse, Error, LoginData>({
    mutationFn: async (loginData: LoginData) => {
      const response = await axiosInstance.post<LoginResponse>(
        "/superadmin/login",
        loginData
      );
      return response.data;
    },
  });
};

