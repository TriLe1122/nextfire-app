import Link from "next/link.js";
import reactMarkdown from "react-markdown";
import React from "react"
import ReactMarkdown from "react-markdown";



export default function PostContent({ post }) {
  const createdAt = typeof post?.createdAt === 'number' ? new Date(post.createdAt) : post.createdAt

  return (
    <div className="card">
      <h1>{post?.title}</h1>
      <span className="text-sm">
        Written by {''}
        <Link href={`/${post.username}/`}>
          <a className="text-info">@{post.username}</a>
        </Link>{''}
        on {createdAt.toISOString()}
      </span>

      <ReactMarkdown>{ post?.content}</ReactMarkdown>
    </div>
  );
}