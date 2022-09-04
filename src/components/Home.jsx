import React from "react";
import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../auth/firebase";
import { useNavigate } from "react-router-dom";
import Post from "./post/Post";
import Header from "./Header";
import { db } from "../auth/firebase";
import { collection, getDocs } from "firebase/firestore";
const Home = () => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const postCollectionRef = collection(db, "posts");

  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);

      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, [posts]);

  return (
    <div>
      {user ? (
        <>
          <Header user={user} />
          <button onClick={logout}> Sign Out </button>
          {posts.map((post, id) => (
            <Post
              key={id}
              email={post.email}
              post={post.post}
              photo={post.photoURL}
              name={post.displayName}
            />
          ))}
        </>
      ) : (
        navigate("/")
      )}
    </div>
  );
};

export default Home;
