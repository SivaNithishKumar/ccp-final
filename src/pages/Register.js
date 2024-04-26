import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";


const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
  
    try {
      // Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);
  
      // Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);
  
      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            // Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
  
            // Store user information in Firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
  
            // Create empty user chats on Firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
  
            // Reset the form and set loading to false
            e.target.reset();
            setLoading(false);
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Collab Cafe</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="Display Name" />
          <input required type="email" placeholder="Email" />
          <input required type="password" placeholder="Password" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src='img/addAvatar.png' alt="" />
            <span>Add an avatar</span>
          </label>
          <button disabled={loading}>Sign up</button>
          {loading && "Uploading and compressing the image, please wait..."}
          {err && <span>Something went wrong</span>}
        </form>
      </div>
    </div>
  );
};

export default Register;