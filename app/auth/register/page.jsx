"use client";

import { redirect } from "next/navigation";
import "./register.css";
import ShinyText from "@/components/ShinyText";
import { useState } from "react";
import axiosClient from "@/lib/axiosClient";
import { toast } from "nextjs-toast-notify";
import { AxiosError } from "axios";

function RegisterPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthdate: "",
    password: "",
    confirmPassword: "",
  });

  const register = () => {
    let shouldRedirect = false;
    axiosClient.post("api/trainers", form).then((response) => {
      if (response.status === 200) {
        toast.success("Usuario creado correctamente", {
          duration: 2000,
        });
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
        toast.error("Error al crear el usuario", {
          duration: 5000,
          position: "top-center",
        });
      }
    }).finally(() => {
      if (shouldRedirect) {
        redirect("/auth/login");
      }
    });
  };

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
      <form className="inputs mb-5">
        <input type="text" placeholder="NOMBRE" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
        <input type="text" placeholder="APELLIDO" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
        <input type="text" placeholder="CORREO" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="date" placeholder="FECHA DE NACIMIENTO" value={form.birthdate} onChange={(e) => {const selectedDate = e.target.value;setForm({ ...form, birthdate: selectedDate });}}/>
        <input type="password" placeholder="CONTRASEÑA" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <input type="password" placeholder="CONFIRMAR CONTRASEÑA" value={form.confirmPassword} onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })} />
      </form>
      <div className="buttonslinks">
        <button className="gradient-button" onClick={register}>CREAR CUENTA</button>
        <div className="links">
          <div className="create">
            <p>¿Ya tienes cuenta de entrenador?</p>
            &nbsp;
            <a href="/auth/login" className="createacount">
              INICIAR SESION
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
