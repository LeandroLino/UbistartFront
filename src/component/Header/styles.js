import styled from "styled-components";
const Bar = styled.div`
  font-family: "Maven Pro", sans-serif;

  width: 100vw;
  height: 10vh;

  display: flex;
  justify-content: space-between;
`;
Bar.Align = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
`;

Bar.Logo = styled(Bar.Align)`
  font-weight: 1000;
  color: #fff;

  width: 20%;
  font-size: 1.5em;
  @media (max-width: 1300px) {
    width: 30%;
    font-size: 1.2em;
  }
  @media (max-width: 1050px) {
    font-size: 1.1em;
  }
  @media (max-width: 950px) {
    font-size: 1em;
    width: 40%;
  }
  > img {
    height: 40%;
    width: 40%;
  }
`;

Bar.Add = styled(Bar.Align)`
  margin-top: 25px;

  width: 15%;

  > button {
    cursor: pointer;

    background-color: #27ae60;
    border: 0;
    border-radius: 25px;

    height: 45%;
    width: 70%;
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

export default Bar;
