import Bar from "./styles";
import { useLocation } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { useEffect, useState } from "react";

const Header = ({ setCreateTask }) => {
  const location = useLocation();
  const [showButton, setButtonState] = useState(false);
  useEffect(() => {
    setButtonState(location.pathname == "/home");
  }, [location]);
  return (
    <Bar>
      <Bar.Logo>
        <img src={Logo} alt="Ballerini-Logo"></img>
        Ubistart To Do
      </Bar.Logo>
      <Bar.Add>
        {showButton && (
          <>
            <button onClick={() => setCreateTask(true)}>Create Task</button>
          </>
        )}
      </Bar.Add>
    </Bar>
  );
};

export default Header;
