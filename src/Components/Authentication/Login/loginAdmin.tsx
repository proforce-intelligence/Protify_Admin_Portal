import React, { useState } from "react";
import HomeLogin from "../../../../src/assets/HomeImage.png";
import Styles from "./loginAdmin.module.css";
import { useLogin } from "../../../Hooks/useLogin";
import type { AxiosError } from "axios";




interface LoginError {
  message: string;
}


export const LoginAdmin: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { mutate: login, isPending, isError, error, data } = useLogin();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    login({ username, password, token });
  };

  return (
    <div className={Styles.loginAdminContainer}>
      <div className={Styles.leftPanel}>
        <img src={HomeLogin} alt="Home" className={Styles.leftPanelImage} />
      </div>

      <div className={Styles.rightPanel}>
        <div className={Styles.loginIcon}></div>
        <div className={Styles.formContainer}>
          <h2 className={Styles.rightPanelH1}>Welcome</h2>
          <p className={Styles.rightPanelPagrah}>Enter your login details to continue</p>

          <form onSubmit={handleSubmit} className={Styles.formContainerForm}>
            <label htmlFor="username" className={Styles.formContainerlabel}>Username</label>
            <input
              type="text"
              id="username"
              placeholder="davisuo"
              className={Styles.formContainerinput}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <label htmlFor="password" className={Styles.formContainerlabel}>Password</label>
            <div className={Styles.passwordInput}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className={Styles.passwordInputs}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className={Styles.eyeIcon}
                onClick={() => setShowPassword((prev) => !prev)}
              >
                👁️
              </span>
            </div>

            <label htmlFor="token" className={Styles.formContainerlabel}>One Token</label>
            <input
              type="text"
              id="token"
              placeholder="123456"
              className={Styles.formContainerinput}
              value={token}
              onChange={(e) => setToken(e.target.value)}
              required
            />

            <button type="submit" disabled={isPending}>
              {isPending ? "Logging in..." : "Log in"}
            </button>

            {isError && (
              <p className={Styles.errorMessage}>
    {(error as AxiosError<LoginError>)?.response?.data?.message || "Login failed"}
  </p>
            )}
            {data?.success && (
              <p className={Styles.successMessage}>
                Login successful! Token: {data.accessToken}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
