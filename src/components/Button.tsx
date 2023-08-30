import React, { ReactNode, useState } from "react";
import DismissibleAlert from "./DismissibleAlert";

interface Props {
  children: ReactNode;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
}

const Button = ({ children, color = "success" }: Props) => {
  const [clickCount, setClickCount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
    setClickCount(clickCount + 1);
  };

  return (
    <div>
      <button
        type="button"
        className={"btn btn-" + color}
        onClick={handleClick}
      >
        {children} ({clickCount} clicks)
      </button>

      {showAlert && <DismissibleAlert>YOU HAVE BEEN HACKED!</DismissibleAlert>}
    </div>
  );
};

export default Button;
