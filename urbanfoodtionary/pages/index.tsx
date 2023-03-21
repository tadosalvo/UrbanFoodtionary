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
  // log of postList
  //console.log(postList);

  async function handleAddPost() {
    if (!name || !description) {
      return;
    }
    // const newKey =
    //   Object.keys(postList).length === 0
    //     ? 1
    //     : Math.max(Object.keys(postList).length) + 1;

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

      {/* 
      <>
        {Object.keys(postList).map((post, i) => {
          return <div key={i}>{postList[post as keyof typeof postList]}</div>;
        })}
      </> */}

      <button onClick={handleAddPost}> Add Post </button>
    </>
  );

  return <h1>Urban Foodtionary test test</h1>;

}
