import '../styles/globals.css'
import React from "react"
import Navbar from "../components/Navbar.js"
import { Toaster } from "react-hot-toast"
import { UserContext } from '../lib/context.js'
import { useUserData } from "../lib/hooks.js"


function MyApp({ Component, pageProps }) {
  const userData = useUserData();
  return (

    <UserContext.Provider value={userData}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  )
}

export default MyApp
