
import Head from "next/head"
import Image from "next/image"
import React from "react"
import { Inter } from "next/font/google"
import Landing from "./api/components/landing"

export default function Home() {

  return (
    <div>
      <Head>
      <title>Urban Foodtionary</title>
      </Head>
      <Landing />
    </div>
  
  )
}