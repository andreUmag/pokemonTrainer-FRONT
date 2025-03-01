import "./login.css";
import ShinyText from "@/components/ShinyText";
import Link from "next/link";

function LoginPage() {
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
        <input type="text" placeholder="CORREO" />
        <input type="password" placeholder="CONTRASEÑA" />
      </div>
      <div className="buttonslinks">
        <button className="gradient-button">INICIAR SESION</button>
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
