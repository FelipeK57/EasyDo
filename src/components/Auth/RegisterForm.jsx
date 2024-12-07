import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { register } from "../../api/auth";
import SuccessModal from "../Global/SuccessModal";
import ErrorModal from "../Global/ErrorModal";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorServer, setErrorServer] = useState("");

  const [isModalSuccessOpen, setModalSuccessOpen] = useState(false);

  const openModalSuccess = () => setModalSuccessOpen(true);
  const closeModalSuccess = () => setModalSuccessOpen(false);

  const [isModalErrorOpen, setModalErrorOpen] = useState(false);

  const openModalError = () => setModalErrorOpen(true);
  const closeModalError = () => setModalErrorOpen(false);

  const handleSubmitForm = async () => {
    try {
      setLoading(true);
      const newErrors = {
        name: name === "" ? "El nombre es requerido" : "",
        email:
          email === ""
            ? "El correo es requerido"
            : !email.includes("@")
            ? "El correo no es válido: debe contener @"
            : "",
        password:
          password === ""
            ? "La contraseña es requerida"
            : password.length < 8
            ? "La contraseña debe tener al menos 8 caracteres"
            : "",
        confirmPassword:
          confirmPassword === ""
            ? "La confirmación de la contraseña es requerida"
            : password !== confirmPassword
            ? "Las contraseñas no coinciden"
            : "",
      };

      if (Object.values(newErrors).some((error) => error !== "")) {
        setErrors(newErrors);
        setLoading(false);
        return;
      }

      const result = await register(name, email, password);
      if (result.status === 201) {
        openModalSuccess();
      }

      if (result.error) {
        setErrorServer(result.error);
        openModalError();
      }

      console.log(result);
      setLoading(false);
      setErrors({ name: "", email: "", password: "", confirmPassword: "" });
    } catch (error) {
      setLoading(false);
      setErrorServer("Ocurrió un error en el servidor, intenta más tarde");
      setSuccessfullRegister(false);
      console.error(error);
    }
  };

  return (
    <form className="flex flex-col gap-5">
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        label={"Nombre completo"}
        labelPlacement="outside"
        placeholder="Escribe tu nombre..."
        variant="bordered"
        errorMessage={errors.name}
        isInvalid={errors.name !== ""}
      />
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label={"Correo electrónico"}
        labelPlacement="outside"
        placeholder="Escribe tu correo..."
        variant="bordered"
        errorMessage={errors.email}
        isInvalid={errors.email !== ""}
      />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        label={"Contraseña"}
        labelPlacement="outside"
        placeholder="Escribe tu contraseña..."
        type="password"
        variant="bordered"
        errorMessage={errors.password}
        isInvalid={errors.password !== ""}
      />
      <Input
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        label={"Confirmar contraseña"}
        labelPlacement="outside"
        placeholder="Confirma tu contraseña..."
        type="password"
        variant="bordered"
        errorMessage={errors.confirmPassword}
        isInvalid={errors.confirmPassword !== ""}
      />
      <Button
        isLoading={loading}
        onPress={handleSubmitForm}
        className="font-semibold"
        color="primary"
        variant="shadow"
      >
        {loading ? "Cargando..." : "Registrarse"}
      </Button>
      <SuccessModal
        isOpen={isModalSuccessOpen}
        onClose={closeModalSuccess}
        title={"Registro exitoso"}
        message={
          "Oficialmente eres parte de EasyDo. Ahora puedes iniciar sesión."
        }
        buttonText={"Continuar"}
      />
      <ErrorModal
        isOpen={isModalErrorOpen}
        onClose={closeModalError}
        title={"Tuvimos un problema"}
        message={errorServer}
        buttonText={"Vale"}
      />
    </form>
  );
}

export default RegisterForm;
