const GoogleBtn = () => {
    return <button
    className="btn btn-outline-dark"
    onClick={() =>
      (window.location.href = "http://localhost:3001/auth/google")
    }
  >
    Sign in with Google
  </button>
}

export default GoogleBtn;