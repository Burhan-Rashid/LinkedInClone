import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Widgets from "./components/Widgets";
import { logout, login, selectUser } from "./state/userSlice";
import Register from "./components/Register";
import { useDispatch, useSelector } from "react-redux";
import { auth, db } from "./Firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  React.useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        db.collection("users")
          .doc(userAuth.uid)
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
      } else {
        dispatch(logout);
      }
    });
  }, []);

  return (
    <>
      {!user ? (
        <Register />
      ) : (
        <div className="App">
          <Header />
          <div className="content">
            <Sidebar />
            <Main />
            <Widgets />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
