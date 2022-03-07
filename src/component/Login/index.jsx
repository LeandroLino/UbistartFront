import { useNavigate } from "react-router-dom";
import Container from "./styles";
import api from "../../api/api";
import Button from "../Button/index";
import { useState } from "react";
import Input from "../Input";

const Register = ({ close }) => {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [validate, setValidate] = useState(true);
  const signIn = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 2000));

    if (
      (email && password && email.split("").includes("@")) ||
      (email == "admin" && password == "admin")
    ) {
      const response = await api.login({ email, password });
      if (response.status == 200) {
        localStorage.setItem("Authorization", `Bearer ${response.data.token}`);
        setLoading(false);
        navigate("/home");
        return;
      }
    }
    setValidate(false);
    setLoading(false);
    return;
  };

  return (
    <Container>
      <div onClick={() => close(false)}>Back</div>
      <div className="Title">Welcome back!</div>
      <Container.Inputs>
        <Input
          validate={validate}
          onChange={(e) => {
            setValidate(true);
            setEmail(e.target.value);
          }}
          placeholder="Email"
        ></Input>
        <Input
          validate={validate}
          type="password"
          onChange={(e) => {
            setValidate(true);
            setPassword(e.target.value);
          }}
          placeholder="Passoword"
        ></Input>
      </Container.Inputs>
      <Button
        style={{
          height: "5vh",
          marginLeft: "10px",
        }}
        loading={loading}
        onClick={() => signIn()}
      >
        Sign in
      </Button>
    </Container>
  );
};

export default Register;
