import styled from "styled-components";

const Container = styled.div`
  color: #d2d2d2;
  font-family: "Maven Pro", sans-serif;
`;

Container.Blob = styled.div`
  > img {
    z-index: 0;
    position: absolute;
    overflow: hidden;
    height: 90vh;
  }

  width: 40%;
`;

Container.Sign = styled.div`
  > div {
    position: absolute;
    height: 40vh;

    width: 30vw;
    left: 35vw;
    @media (max-width: 860px) {
      width: 40vw;
      left: 30vw;
    }
    @media (max-width: 860px) {
      width: 50vw;
      left: 25vw;
    }
    @media (max-width: 550px) {
      width: 70vw;
      left: 15vw;
      top: 20vw;
    }
    top: 15vw;
  }

  /* > div {
    z-index: 0;
    right: 12%;
    position: absolute;
    height: 80vh;
  }
  @media (max-width: 1000px) {
    > div {
      z-index: 1;
      right: 0;
      position: absolute;
      height: 55vh;
    }
  }
  @media (max-width: 1500px) and (min-width: 1000px) {
    > div {
      z-index: 1;
      right: 0;
      position: absolute;
      height: 70vh;
    }
  }

  width: 40%;*/
`;

Container.Title = styled.div`
  @media (max-width: 600px) {
    width: 70%;
  }

  font-weight: 400;
  font-family: "Overpass", sans-serif;

  @media (max-width: 1800px) {
    margin: 35% 0 0 40%;
  }

  @media (max-width: 840px) {
    margin: 40% 0 0 40%;
  }

  @media (max-width: 720px) {
    margin: 50% 0 0 40%;
  }

  @media (max-width: 600px) {
    margin: 60% 0 0 35%;
  }
  }
  @media (max-width: 580px) {
    margin: 70% 0 0 30%;
  }
  @media (max-width: 450px) {
    margin: 90% 0 0 35%;
  }
  @media (max-width: 350px) {
    margin: 85% 0 0 30%;
  }
  margin: 30% 0 0 40%;

  width: 40%;
  height: 70px;

  font-size: 24px;

  position: absolute;
  z-index: 2;

  > button {

    cursor: pointer;

    margin-top: 10%;

    border-radius: 25px;
    border: 0;
    border-bottom: 1px solid black;

    background-color: #27ae60;
    @media (max-width: 600px) {
      width: 37vw;
    }
  
    width: 20vw;
    height: 70%;
    color: #fff;
    font-size: 0.7em;
    font-family: "Maven Pro", sans-serif;
    font-weight: 1000;
    :hover {
      background-color: #7ac499;
    }
    transition: background-color 0.1s;
  }
`;

export default Container;
