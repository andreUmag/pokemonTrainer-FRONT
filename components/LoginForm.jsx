import React, { useState } from "react";
import ShinyText from "./ShinyText";

function loginForm({ onLogin }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

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
        <button className="gradient-button" onClick={() => onLogin(form)}>INICIAR SESION</button>
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

export default loginForm;
