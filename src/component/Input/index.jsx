import Inputter from "./styles";
const Input = (children) => {
  return (
    <Inputter
      placeholder={children.placeholder || ""}
      type={children.type || "text"}
      validate={children.validate}
      onChange={children.onChange}
      value={children.value}
    ></Inputter>
  );
};

export default Input;
