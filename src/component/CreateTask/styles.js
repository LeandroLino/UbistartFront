import styled from "styled-components";

const Container = styled.div`
  font-family: "Maven Pro", sans-serif;
  font-weight: 1000;
  color: #fff;

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
  > div:first-child {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
  }
`;

Container.SubContainer = styled.div`
  position: absolute;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  border-radius: 5px;
  margin-top: 3%;
  width: 30%;
  height: 35%;
  background-color: #454545;

  > div:not(:last-child) {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  > div:first-child {
    font-size: 25px;
  }
  > div:not(:first-child) {
    font-size: 15px;
    width: 55%;
  }
  > div input {
    width: 100%;
    height: 2em;
    border-radius: 5px;
  }
`;

Container.Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Container;
