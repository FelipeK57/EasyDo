import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { login } from "../../api/auth";
import { useNavigate } from "react-router";

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleSubmitForm = async () => {
    try {
      setLoading(true);

      const newErrors = {
        email:
          email === ""
            ? "El correo electrónico es requerido"
            : !email.includes("@")
            ? "El correo electrónico no es válido"
            : "",
        password: password === "" ? "La contraseña es requerida" : "",
      };

      if (Object.values(newErrors).some((error) => error !== "")) {
        setErrors(newErrors);
        setLoading(false);
        return;
      }

      const result = await login(email, password);
      console.log(result);

      if (result.status === 200) {
        navigate("/dashboard");
      }

      setLoading(false);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-5">
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label={"Correo electrónico"}
        placeholder="Ingresa tu correo..."
        labelPlacement="outside"
        variant="bordered"
        errorMessage={errors.email}
        isInvalid={errors.email !== ""}
      />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        label={"Contraseña"}
        placeholder="Ingresa tu contraseña..."
        labelPlacement="outside"
        variant="bordered"
        type="password"
        errorMessage={errors.password}
        isInvalid={errors.password !== ""}
      />
      <Button
        isLoading={loading}
        onPress={handleSubmitForm}
        className="font-semibold"
        color="primary"
        variant="shadow"
      >
        Iniciar sesión
      </Button>
    </form>
  );
}

export default LoginForm;
