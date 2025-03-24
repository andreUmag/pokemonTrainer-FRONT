"use client";
import React from 'react';
import ShinyText from "@/components/ShinyText";
import "./forgot-password.css";
import axiosClient from "@/lib/axiosClient";
import {toast} from "nextjs-toast-notify";

const Page = () => {
  const [email, setEmail] = React.useState("");

  const onPasswordReset = async () => {
    try {
      const response = await axiosClient.post("/api/auth/forgot-password", { email });
      toast.success("Correo de restablecimiento enviado con éxito.");
    } catch (error) {
      const errorMessage = error.response?.data?.errors?.[0] || "Ocurrió un error inesperado.";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="forgot-password mt-20">
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
        <input type="text" placeholder="CORREO" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className="buttonslinks">
        <button className="gradient-button" onClick={onPasswordReset}>RESETEAR CONTRASEÑA</button>
      </div>
    </div>
  );
};

export default Page;