"use client";
import React from 'react';
import ShinyText from "@/components/ShinyText";
import {toast} from "nextjs-toast-notify";
import axiosClient from "@/lib/axiosClient";
import "./reset-password.css";
import {redirect, useSearchParams} from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const [form, setForm] = React.useState({
    password: "",
    confirmPassword: "",
  });

  const onPasswordReset = async () => {
    if (form.password !== form.confirmPassword) {
      toast.error("Las contraseñas no coinciden.");
      return;
    }

    if (searchParams.get("token") === null) {
      toast.error("Token inválido.");
      return;
    }
    let shouldRedirect = false;

    try {
      await axiosClient.post("/api/auth/reset-password", {
        newPassword: form.password,
        token: searchParams.get("token"),
      });
      toast.success("Contraseña restablecida con éxito.");
      shouldRedirect = true;
    } catch (error) {
      const errorMessage = error.response?.data?.errors?.[0] || "Ocurrió un error inesperado.";
      toast.error(errorMessage);
    }

    if (shouldRedirect) {
      redirect("/auth/login");
    }
  }

  return (
    <div className="reset-password mt-20">
      <div className="iconlogo">
        <img className="pokeball" src="/pokeball.webp" alt="poke"/>
        <ShinyText
          text="POKEMON TRAINER"
          disabled={false}
          speed={5}
          className="tittle"
        />
      </div>
      <div className="inputs">
        <input type="password" placeholder="CONTRASEÑA" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
      </div>
      <div className="inputs">
        <input type="password" placeholder="CONFIRMAR CONTRASEÑA" value={form.confirmPassword} onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })} />
      </div>
      <div className="buttonslinks">
        <button className="gradient-button" onClick={onPasswordReset}>RESETEAR CONTRASEÑA</button>
      </div>
    </div>
  );
};

export default Page;