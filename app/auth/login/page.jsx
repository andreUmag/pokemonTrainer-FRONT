"use client";

import "./login.css";
import ShinyText from "@/components/ShinyText";
import { useState } from "react";
import axiosClient from "@/lib/axiosClient";
import { AxiosError } from "axios";
import { toast } from "nextjs-toast-notify";
import { redirect } from "next/navigation";

function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const login = () => {
    let shouldRedirect = false;
    axiosClient.post("api/auth/login", form).then((response) => {
      if (response.status === 200) {
        toast.success("Usuario logueado correctamente");
        shouldRedirect = true;
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
    <div className="login mt-20">
      <div className="iconlogo">
        <img className="pokeball" src="/pokeball.webp" alt="poke" />
        <ShinyText
          text="POKEMON TRAINER"
          disabled={false}
          speed={5}
          className="tittle"
        />
      </div>
      <div className="inputs">
        <input type="text" placeholder="CORREO" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="CONTRASEÑA" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
      </div>
      <div className="buttonslinks">
        <button className="gradient-button" onClick={login}>INICIAR SESION</button>
        <div className="links">
          <div className="create">
            <p>¿No tienes cuenta de entrenador?</p>
            &nbsp;
            <a href="/register" className="createacount">
              CREA TU CUENTA
            </a>
          </div>
          <a href="#" className="create pas">
            OlVIDE MI CONTRASEÑA
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
