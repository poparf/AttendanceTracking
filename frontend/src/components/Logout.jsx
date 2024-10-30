const Logout = ({ setUser }) => {
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <div>
      <button className="btn btn-danger mt-3" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;