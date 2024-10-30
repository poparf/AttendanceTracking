const UserDetails = ({user}) => {
  return (
    <div>
      <h1>Hello {user.name}</h1>
      {user.picture && (
        <img
          src={user.picture}
          alt="Profile"
          className="rounded-circle mb-3"
          style={{ width: "100px", height: "100px" }}
        />
      )}
    </div>
  );
};

export default UserDetails;
