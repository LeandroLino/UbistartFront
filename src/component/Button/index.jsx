import ButtonComponent from "./styles";
import "./loading.css";

const Button = (props) => {
  console.log(props);
  return (
    <ButtonComponent
      classComponent={props.classComponent}
      style={props.style}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.loading ? (
        <ButtonComponent.Loading>
          <div className="balls">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </ButtonComponent.Loading>
      ) : (
        props.children
      )}
    </ButtonComponent>
  );
};

export default Button;
