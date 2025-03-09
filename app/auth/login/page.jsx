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
        toast.success("Usuario logueado correctamente");
        shouldRedirect = true;
        Cookies.set("user_id", response.data.id);
      }
    }).catch((error) => {
      if (error instanceof AxiosError) {
        let errors = error.response.data.errors;
        const message = Object.keys(errors)
          .map((key) => errors[key])
          .join("<br>");
        toast.error(message, {
          duration: 5000,
          position: "top-center",
        });
      } else {
        toast.error("Error al loguear el usuario", {
          duration: 5000,
          position: "top-center",
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
