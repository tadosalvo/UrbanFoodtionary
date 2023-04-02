import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { doc, addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../context/AuthContext";
import Navbar from "@/components/navbar";
import Landing from "@/components/landing";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [addPost, setAddPost] = useState(false);

  //const [postList, setPostList] = useState([]);
  // post fields
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "test name",
      description: "test description",
    },
  ]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(true);

  const AuthContext = useAuth();

  //console.log(currentUser);
  // log of postList
  //console.log(postList);

  // function that handles submit requests
  async function submitHandler() {
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }
    if (isLoggingIn) {
      try {
        await AuthContext.login(email, password);
      } catch (err) {
        setError("Incorrect email or password");
      }
      return;
    }
    await AuthContext.signup(email, password);
  }

  // function that handles add posts to firebase
  async function handleAddPost() {
    if (!name || !description) {
      return;
    }

    const updatePosts = [
      ...posts,
      {
        id: posts.length + 1,
        name: name,
        description: description,
      },
    ];

    setPosts(updatePosts);

    //setPostList({ ...postList, [newKey]: post });

    // add fields for posts here
    let test = {
      name: name,
      description: description,
    };
    //const postRef = doc(db, "posts");
    await addDoc(collection(db, "posts"), test);
  }

  return (
    <>
      <h1>Urban Foodtionary</h1>

      <h1>Login</h1>

      <div>
        <div>
          <input
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <button onClick={submitHandler}>Submit</button>

      <div>
        <input
          type="text"
          placeholder="Enter food name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.name}</p>
          <p>{post.description}</p>
        </div>
      ))}

      <button onClick={handleAddPost}> Add Post </button>

      <div>
        <Head>
          <title>Urban Foodtionary</title>
        </Head>
      </div>
    </>
  );
}
