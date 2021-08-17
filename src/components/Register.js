import React from "react";
import "./Register.css";
import { auth } from "../Firebase";
import { login } from "../state/userSlice";
import { useDispatch } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

function Register() {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [photo, setPhoto] = React.useState("");
  const [registerType, setRegisterType] = React.useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      auth.createUserWithEmailAndPassword(email, password).then((res) => {
        res.user
          .updateProfile({
            displayName: name,
            photoURL: photo,
          })
          .then(
            dispatch(
              login({
                email: res.user.email,
                uid: res.user.uid,
                displayName: name,
                photoUrl: photo,
              })
            )
          );
      });
    } catch (error) {
      alert(error);
      setLoading(false);
    }
    setLoading(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        dispatch(
          login({
            email: res.user.email,
            uid: res.user.uid,
            displayName: res.user.displayName,
            photoUrl: res.user.photoURL,
          })
        );
      })
      .catch((error) => {
        alert(error.message);
        setLoading(false);
      });
    setLoading(false);
  };

  const handleType = () => {
    setRegisterType(!registerType);
  };

  return (
    <div className="mainContainer">
      {registerType ? (
        <div className="register">
          <img
            className="logo"
            src="/assets/LinkedIn-Logo.png"
            alt="....logo"
          />
          <form className="form">
            <input
              type="text"
              value={name}
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              value={photo}
              placeholder="Photo Url (optional)"
              onChange={(e) => setPhoto(e.target.value)}
            />
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {loading ? (
              <div className="loadingDiv">
                <CircularProgress />
              </div>
            ) : (
              <button type="submit" onClick={handleRegister}>
                Register
              </button>
            )}
          </form>
          <div className="bottomContainer">
            <h6>Already have an account?</h6>
            <h5 onClick={handleType}>Login here</h5>
          </div>
        </div>
      ) : (
        <div className="register">
          <img
            className="logo"
            src="/assets/LinkedIn-Logo.png"
            alt="....logo"
          />
          <form className="form">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {loading ? (
              <div className="loadingDiv">
                <CircularProgress />
              </div>
            ) : (
              <button type="submit" onClick={handleLogin}>
                Sign In
              </button>
            )}
          </form>
          <div className="bottomContainer">
            <h6>Don't have an account?</h6>
            <h5 onClick={handleType}>Register here</h5>
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;
