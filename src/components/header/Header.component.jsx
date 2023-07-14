import { useState } from "react";
import Spinner from "../spinner/spinner.component";
import "./header.style.scss";

function Header() {
  const [isReady, setIsReady] = useState(false);

  const handleOnLoad = () => {
    setIsReady(true);
  };

  return (
    <div className="header">
      {!isReady && <Spinner />}
      <img
        src="https://images.unsplash.com/photo-1523742810066-4e36f7952bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
        onLoad={handleOnLoad}
        style={{ display: "none" }}
      />
    </div>
  );
}

export default Header;
