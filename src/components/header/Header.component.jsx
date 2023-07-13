import "./header.style.scss";

function Header({ setIsReady }) {
  const handleOnLoad = () => {
    setIsReady(true);
  };

  return (
    <div className="header">
      <img
        src="https://images.unsplash.com/photo-1620503292890-c597f62cce8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        onLoad={handleOnLoad}
      />
    </div>
  );
}

export default Header;
