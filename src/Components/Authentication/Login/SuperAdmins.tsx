import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomeLogin from "../../../../src/assets/HomeImage.png";
import Styles from "./loginAdmin.module.css";
import { useLogin } from "../../../Hooks/SuperAdminsLogin";
import type { AxiosError } from "axios";



interface LoginError {
  message: string;
}

export const SuperAdminLogin: React.FC = () => {
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const { mutate: login, isPending, isError, error, data } = useLogin();

  useEffect(() => {
    if (data?.success) {
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    }
  }, [data, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ token });
  };

  return (
    <div className={Styles.loginAdminContainer}>
      <div className={Styles.leftPanel}>
        <img src={HomeLogin} alt="Home" className={Styles.leftPanelImage} />
      </div>

      <div className={Styles.rightPanel}>
        <div className={Styles.loginIcon}></div>
        <div className={Styles.formContainer}>
          <h2 className={Styles.rightPanelH1}>SuperAdmins</h2>
          <p className={Styles.rightPanelPagrah}>Enter your one-time token to continue</p>

          <form onSubmit={handleSubmit} className={Styles.formContainerForm}>
            <label htmlFor="token" className={Styles.formContainerlabel}>One Token</label>
            <input
              type="text"
              id="token"
              placeholder="Enter your token"
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
                ✅ Login successful! Redirecting...
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminLogin;