import './login.css';

function LoginPage() {
  return (
    <div className="login mt-20">
      <div className="iconlogo">
        <img className="pokeball" src="/pokeball.webp" alt="poke" />
        <h2 className="tittle">POKEMON TRAINER</h2>
      </div>
      <div className="inputs">
        <input type="text" placeholder="Correo" />
        <input type="password" placeholder="Contraseña" />
      </div>
      <div className="buttonslinks">
        <button>INICIAR SESION</button>
        <div className="links">
          <div className="create">
            <p>¿No tienes cuenta de entrenador?</p>
            &nbsp;
            <a href="register.html" className='createacount'>CREA TU CUENTA</a>
          </div>
          <a href="forgotpassword.html" className="create">OlVIDE MI CONTRASEÑA</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;