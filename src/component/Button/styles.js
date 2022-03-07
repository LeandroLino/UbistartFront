import styled from "styled-components";

const ButtonComponent = styled.button`
  cursor: pointer;
  margin-top: 10px;

  background-color:${(props) =>
    props.classComponent == "WhiteButton"
      ? "#fff"
      : props.classComponent == "RedButton"
      ? "#f42626"
      : "#27ae60"};
  }
  border: 0;
  border-radius: 25px;

  color: #fff;
  font-size: 0.7em;
  font-family: "Maven Pro", sans-serif;
  font-weight: 1000;
  
  :hover {
    background-color: ${(props) =>
      props.classComponent == "WhiteButton"
        ? "#c4c4c4"
        : props.classComponent == "RedButton"
        ? "#f74545"
        : "#7ac499"};
  }
  transition: background-color 0.2s;
`;
ButtonComponent.Loading = styled.div`
  width: 100%;
  height: 35px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export default ButtonComponent;
