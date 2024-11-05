const UserDetails = ({user}) => {
  return (
    <div className="flex items-center">
       <img
          src={user.picture}
          alt="Profile"
          className="rounded-full mr-6"
        />
      <p>{user.name}</p>
    </div>
  );
};

export default UserDetails;
