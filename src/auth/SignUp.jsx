import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

const SignUp = () => {
  const [SignUpEmail, setSignUpEmail] = useState("");
  const [SignUpPassword, setSignUpPassword] = useState("");
  const [DispalyName, setDispalyName] = useState("");
  const [PhotoUrl, setPhotoUrl] = useState("");

  const navigate = useNavigate();

  const signUp = async () => {
    if (SignUpEmail === "" || SignUpPassword === "" || DispalyName === "") {
      alert("fill form correctly");
    } else {
      try {
        await createUserWithEmailAndPassword(
          auth,
          SignUpEmail,
          SignUpPassword
        ).catch((err) => console.log(err.message));

        await updateProfile(auth.currentUser, {
          displayName: DispalyName,
          photoURL: PhotoUrl,
        }).catch((err) => console.log(err.message));

        navigate("/home");
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <div className="signup">
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setDispalyName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="image url"
        onChange={(e) => setPhotoUrl(e.target.value)}
      />
      <input
        type="email"
        placeholder="email..."
        onChange={(e) => setSignUpEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="password..."
        onChange={(e) => setSignUpPassword(e.target.value)}
        required
      />
      <button onClick={signUp}>SignUp</button>
      <p>
        Already user?<Link to="/">Login</Link>
      </p>
    </div>
  );
};

export default SignUp;
