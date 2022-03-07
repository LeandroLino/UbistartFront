import Container from "./styles";
import BlobSmall from "../../assets/Blobs-small.svg";
import { useNavigate } from "react-router-dom";
import Underline from "../../component/Underline/index.jsx";
import Register from "../../component/Register";
import Login from "../../component/Login";
import { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";

const Home = () => {
  const navigate = useNavigate();

  const [loginOrRegister, setSign] = useState(false);
  const verifyToken = async () => {
    await new Promise((r) => setTimeout(r, 500));
    const token = localStorage.getItem("Authorization").split(" ");
    if (token[0] == "Bearer" && token[1].length >= 137) {
      navigate("/home");
    }
  };
  verifyToken();
  return (
    <Container>
      <Container.Blob>
        <img src={BlobSmall} alt="Details"></img>
      </Container.Blob>
      <Container.Title>
        {!loginOrRegister && (
          <>
            <button onClick={() => setSign(true)}>Sign in</button>
            <Underline />
          </>
        )}
      </Container.Title>
      <Container.Sign>
        {loginOrRegister ? <Login close={setSign} /> : <Register />}
      </Container.Sign>
    </Container>
  );
};

export default Home;
