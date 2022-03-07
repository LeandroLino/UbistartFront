import styled from "styled-components";

const Inputter = styled.input`
  border: ${(props) => (!props.validate ? "1px solid red" : "0")};
`;

export default Inputter;
