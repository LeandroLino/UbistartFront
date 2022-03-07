import styled from "styled-components";

const Container = styled.div`
  width: 50%;

  background-color: #262626;
  border-radius: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  font-family: "Maven Pro", sans-serif;
  color: #fff;
  font-weight: 1000;
  font-size: 2em;

  > div:first-child {
    cursor: pointer;
    font-size: 0.5em;
    position: absolute;
    top: 5%;
    left: 5%;
    color: #464646;

    :hover {
      color: #fff;
    }
    transition: color 0.2s;
  }
  .Title {
    @media (max-width: 860px) {
      font-size: 0.8em;
    }
    @media (max-width: 750px) {
      margin-top: 10px;
      font-size: 0.8em;
    }
    @media (max-width: 500px) {
      font-size: 0.6em;
    }
  }
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
