import styled from "styled-components";

const Container = styled.div`
  @media (max-width: 600px) {
    margin-top: 15vw;
  }

  width: 25vw;
  background-color: #262626;
  border-radius: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  font-family: "Maven Pro", sans-serif;
  font-weight: 1000;
  font-size: 2em;

  > button {
    font-size: 0.5em;
    @media (max-width: 750px) {
      margin-top: 15px;
      width: 30vw;
    }
    @media (max-width: 700px) {
      font-size: 0.4em;
    }
    @media (max-width: 600px) {
      width: 37vw;
    }

    width: 20vw;
  }
`;

Container.Inputs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 60%;
  > input {
    height: 30px;
    width: 15vw;
    @media (max-width: 860px) {
      width: 25vw;
    }
    @media (max-width: 700px) {
      width: 30vw;
    }

    border-radius: 5px;

    margin-top: 15px;
  }
`;

export default Container;
