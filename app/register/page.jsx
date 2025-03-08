"use client";

import { redirect } from "next/navigation";
import "./register.css";
import ShinyText from "@/components/ShinyText";

function RegisterPage() {

  const redirectToHome = () => {
    redirect("/home");
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
        <input type="text" placeholder="USERNAME" />
        <input type="text" placeholder="NOMBRE Y APELLIDO" />
        <select defaultValue="">
          <option value="" disabled>
            SEXO
          </option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
        </select>
        <input type="text" placeholder="CORREO" />
        <input type="tel" placeholder="CELULAR" />
        <input type="password" placeholder="CONTRASEÑA" />
        <input type="password" placeholder="CONFIRMAR CONTRASEÑA" />
      </form>
      <div className="buttonslinks">
        <button className="gradient-button" onClick={redirectToHome}>CREAR CUENTA</button>
        <div className="links">
          <div className="create">
            <p>¿Ya tienes cuenta de entrenador?</p>
            &nbsp;
            <a href="/login" className="createacount">
              INICIAR SESION
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
