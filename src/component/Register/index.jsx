import { useNavigate } from "react-router-dom";
import Container from "./styles";
import api from "../../api/api";
import Button from "../Button/index";
import { useState } from "react";
import Input from "../Input";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [validate, setValidate] = useState(true);

  const signUp = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    if (name && email && password && password == cPassword) {
      const response = await api.register({ name, email, password });
      if (response.status == 201) {
        localStorage.setItem("Authorization", `Bearer ${response.data.token}`);
        setLoading(false);
        navigate("/home");
        return;
      }
      return;
    }
    setValidate(false);
    setLoading(false);
  };

  return (
    <Container>
      <div>Welcome!</div>
      <Container.Inputs>
        <Input
          validate={validate}
          onChange={(e) => {
            setValidate(true);
            setName(e.target.value);
          }}
          placeholder="Name"
        ></Input>
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
        <Input
          validate={validate}
          type="password"
          onChange={(e) => {
            setValidate(true);
            setCPassword(e.target.value);
          }}
          placeholder="Confirm Passoword"
        ></Input>
      </Container.Inputs>
      <Button
        style={{
          height: "5vh",
          marginLeft: "10px",
        }}
        loading={loading}
        onClick={() => signUp()}
      >
        Sign Up
      </Button>
    </Container>
  );
};

export default Register;
