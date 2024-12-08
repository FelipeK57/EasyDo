import LoginForm from "../components/Auth/LoginForm";
import { Link } from "react-router";

function Login() {
  return (
    <main className="bg-slate-50 flex justify-center items-center min-h-screen">
      <article className="flex flex-col gap-6 w-4/5 sm:w-1/4">
        <h1 className="font-semibold text-xl">
          Inicia sesión en Easy<span className="text-primary">Do</span>.
        </h1>
        <LoginForm />
        <p>
          ¿Aún no tienes una cuenta?{" "}
          <Link to={"/register"} className="text-primary underline">
            Ir a registrarte
          </Link>
          .
        </p>
      </article>
    </main>
  );
}

export default Login;
