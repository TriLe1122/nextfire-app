import Image from "next/image.js";
import Link from 'next/link.js';
import React from "react"


export default function Navbar() {
  const { user, username } = {};

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
                <Image src={user?.photoUrl} alt=""/>
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