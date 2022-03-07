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

  width: 15%;
  font-size: 1.5em;
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
