import googleLogo from '../icons/google.png'
import { serverBaseUrl } from '../utils/variables';

const GoogleBtn = () => {
    return <button
    className="btn btn-outline-light flex"
    onClick={() =>
      window.open(`${serverBaseUrl}/auth/google`, "_self")
    }
  >
   <img className="h-6 mr-2" src={googleLogo} alt="Google logo" />Sign in with Google
  </button>
}

export default GoogleBtn;