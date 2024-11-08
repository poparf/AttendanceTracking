import axios from "axios";

const getUserDetails = async (token) => {
    axios.get("http://localhost:3001/auth/google/userdetails", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((res) => {
        return res.data;
      }).catch((error) => {
        return null;
      });
}

export default getUserDetails;