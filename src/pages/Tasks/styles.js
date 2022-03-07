import styled from "styled-components";
import { ReactComponent as RightArrow } from "../../assets/ArrowRight.svg";
import { ReactComponent as LeftArrow } from "../../assets/ArrowLeft.svg";
const Container = styled.div`
  padding-top: 10%;

  width: 100vw;
  height: 40vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  > img {
    width: 55px;
    height: 55px;
  }
`;
Container.Right = styled(RightArrow)`
  position: absolute;
  right: 3%;
  cursor: pointer;
  :hover {
    > circle {
      stroke-opacity: 1;
    }
    > path {
      fill-opacity: 1;
    }
  }
`;
Container.Left = styled(LeftArrow)`
  position: absolute;
  left: 3%;
  cursor: pointer;
  :hover {
    > circle {
      stroke-opacity: 1;
    }
    > path {
      fill-opacity: 1;
    }
  }
`;

Container.Card = styled.div`
  > div:last-child {
    display: flex;
    justify-content: space-between;

    margin-top: 15px;
    > button {
      width: 45%;
      height: 4vh;
    }
  }
`;
Container.Confirm = styled.div`
  font-family: "Maven Pro", sans-serif;
  color: #fff;

  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 104vh;

  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    > div:first-child {
      font-weight: 1000;
      font-size: 1.3em;
    }
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    height: 25%;
    background-color: #454545;
    border-radius: 5px;
    > div {
      width: 60%;
      text-align: center;
    }
    > div:last-child {
      > button {
        width: 35%;
        height: 3em;
      }
      width: 100%;
      display: flex;
      justify-content: space-around;
    }
  }
`;

export default Container;
