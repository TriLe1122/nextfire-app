import '../styles/globals.css'
import React from "react"
import Navbar from "../components/Navbar.js"
import { Toaster } from "react-hot-toast"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
      <Toaster/>
      </>)
}

export default MyApp
