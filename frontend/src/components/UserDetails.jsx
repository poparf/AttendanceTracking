import useUser from "../hooks/useUser";

const UserDetails = () => {
  const { user } = useUser();
  return (
    <div className="flex items-center">
      <img
        src={user.picture}
        alt="Profile"
        className="rounded-full mr-6 w-auto h-12"
      />
      <p>{user.name}</p>
    </div>
  );
};

export default UserDetails;
