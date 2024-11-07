const Logout = ({ setUser }) => {
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
  );
};

export default Logout;