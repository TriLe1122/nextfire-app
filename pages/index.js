import Head from 'next/head'
import Image from 'next/image'
import React from "react"
import styles from '../styles/Home.module.css'
import Link from "next/link.js"

export default function Home() {
  return (
    <div>
      <Link prefetch={false} href={{
        pathname: '/[username]',
        query: {username: 'trile1122'},
      }}>
       tri
      </Link>
    </div>
  )
}
