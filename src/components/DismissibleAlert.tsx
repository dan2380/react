import React, { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}
const DismissibleAlert = ({ children }: Props) => {
  const [isVisible, setIsVisible] = useState(true);
  const handleClose = () => {
    setIsVisible(false);
  };
  return isVisible ? (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>{children}</strong>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={handleClose}
      ></button>
    </div>
  ) : null;
};

export default DismissibleAlert;
