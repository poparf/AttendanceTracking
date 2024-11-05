import googleLogo from '../icons/google.png'

const GoogleBtn = () => {
    return <button
    className="btn btn-outline-light flex"
    onClick={() =>
      (window.location.href = "http://localhost:3001/auth/google")
    }
  >
   <img className="h-6 mr-2" src={googleLogo} alt="Google logo" />Sign in with Google
  </button>
}

export default GoogleBtn;