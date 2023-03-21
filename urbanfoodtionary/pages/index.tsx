import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React, { useState } from "react";
import { doc, addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [addPost, setAddPost] = useState(false);
  const [post, setPost] = useState("");
  const [postList, setPostList] = useState({});

  console.log(postList);

  async function handleAddPost() {
    if (!post) {
      return;
    }
    const newKey =
      Object.keys(postList).length === 0
        ? 1
        : Math.max(Object.keys(postList).length) + 1;
    setPostList({ ...postList, [newKey]: post });
    setPost("");

    // add fields for posts here
    let test = {
      post: post,
    };
    //const postRef = doc(db, "posts");
    await addDoc(collection(db, "posts"), test);
  }

  return (
    <>
      <h1>Urban Foodtionary</h1>
      <div>
        <input
          type="text"
          placeholder="Enter post"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />
      </div>

      <>
        {Object.keys(postList).map((post, i) => {
          return <div key={i}>{postList[post as keyof typeof postList]}</div>;
        })}
      </>

      <button onClick={handleAddPost}> Add Post </button>
    </>
  );
}
