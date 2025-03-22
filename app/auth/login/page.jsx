"use client";

import "./login.css";
import axiosClient from "@/lib/axiosClient";
import { AxiosError } from "axios";
import { toast } from "nextjs-toast-notify";
import { redirect } from "next/navigation";
import LoginForm from "@/components/LoginForm";
import Cookies from "js-cookie";

function LoginPage() {
  const login = (form) => {
    let shouldRedirect = false;
    axiosClient.post("api/auth/login", form).then((response) => {
      if (response.status === 200) {
        toast.success("Usuario logueado correctamente", {
          duration: 2000,
        });
        shouldRedirect = true;
        console.log(response.data);
        Cookies.set("auth_token", response.data.token);
        Cookies.set("user_id", response.data.userId);
      }
    }).catch((error) => {
      if (error instanceof AxiosError) {
        let errors = error.response.data.errors;
        const message = Object.keys(errors)
          .map((key) => errors[key])
          .join("<br>");
        toast.error(message, {
          duration: 2000,
        });
      } else {
        toast.error("Error al loguear el usuario", {
          duration: 2000,
        });
      }
    }).finally(() => {
      if (shouldRedirect) {
        redirect("/home");
      }
    });
  }

  return (
    <LoginForm onLogin={login} />
  );
}

export default LoginPage;
