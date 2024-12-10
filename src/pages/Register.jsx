import { Link } from "react-router";
import RegisterForm from "../components/Auth/RegisterForm";

function Register() {
  return (
    <main className="bg-slate-50 flex justify-center items-center min-h-screen">
      <article className="flex flex-col gap-6 w-4/5 sm:w-1/4">
        <h1 className="font-semibold text-xl">
          Registrate en Easy<span className="text-primary">Do</span>.
        </h1>
        <RegisterForm />
        <p>
          ¿Ya tienes una cuenta?{" "}
          <Link to={"/login"} className="text-primary underline">
            Ir a inicio de sesión
          </Link>
          .
        </p>
      </article>
    </main>
  );
}

export default Register;
