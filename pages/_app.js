import '../styles/globals.css'
import React from "react"
import Navbar from "../components/Navbar.js"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
      </>)
}

export default MyApp
