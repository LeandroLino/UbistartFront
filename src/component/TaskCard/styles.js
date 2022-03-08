import styled from "styled-components";

const Container = styled.div`
  border-radius: 8px;

  width: 300px;
  height: 200px;
  margin: 20px;

  background-color: rgba(249, 249, 249, 0.14);
  font-family: "Maven Pro", sans-serif;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

Container.Buttons = styled.div`
  > img {
    width: 20px;
    height: 20px;
    padding: 2.5px;

    cursor: pointer;
  }
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 20%;
`;

Container.Texts = styled.div`
  margin: 10px;

  font-size: 1em;
  font-weight: 800;
  color: ${(props) => (props.late ? "red" : "#fff")};
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export default Container;
