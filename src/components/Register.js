import React from "react";
import "./Register.css";
import { auth, db } from "../Firebase";
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
  const [headline, setHeadline] = React.useState("");
  const [registerType, setRegisterType] = React.useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    if (email === "" || password === "" || name === "" || headline === "") {
      return alert("Please fill all the necessary fields!");
    }
    setLoading(true);
    try {
      auth.createUserWithEmailAndPassword(email, password).then((res) => {
        res.user
          .updateProfile({
            displayName: name,
            photoURL: photo,
          })
          .then(
            db.collection("users").doc(res.user.uid).set({
              uid: res.user.uid,
              name: name,
              headline: headline,
              connections: "0",
              profileViews: "0",
              photoUrl: photo,
            }),
            dispatch(
              login({
                email: email,
                uid: res.user.uid,
                name: name,
                photoUrl: photo,
                headline: headline,
                connections: "0",
                profileViews: "0",
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
    if (email === "" || password === "") {
      return alert("Please fill both email and password!");
    }
    setLoading(true);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        db.collection("users")
          .doc(res.user.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              dispatch(
                login({
                  email: doc.data().email,
                  name: doc.data().name,
                  uid: doc.data().uid,
                  headline: doc.data().headline,
                  photoUrl: doc.data().photoUrl,
                  connections: doc.data().connections,
                  profileViews: doc.data().profileViews,
                })
              );
            }
          });
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
              value={headline}
              placeholder="Headline"
              onChange={(e) => setHeadline(e.target.value)}
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
