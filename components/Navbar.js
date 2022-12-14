import Image from "next/image.js";
import Link from 'next/link.js';
import React from "react"
import { useContext } from "react";
import { UserContext } from "../lib/context.js";


export default function Navbar() {

  const { user, username } = useContext(UserContext)

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">FEED</button>
          </Link>
        </li>
        {username && (
          <>
            <li className="push-left">
            <Link href="/admin">
              <button className="btn-blue">Write Posts</button>
          </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img src={user?.photoURL}  width='80' height='80' />
              </Link>
            </li>
          
          </>
        )}

        {!username && (
          <li>
            <Link href="/enter">
              <button>Log in</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )

}