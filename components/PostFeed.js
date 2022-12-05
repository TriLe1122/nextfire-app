import Link from "next/link.js";
import React from "react";

export default function PostFeed({ posts, admin }) {

  return posts ? posts.map((post) => <PostItem post={post} key={post.slug} admin={admin} />) : ''
}

function PostItem({ post, admin = false }) {
  const wordCount = post?.content.trim().split(/\s+/g).length
  const minutesToRead = (wordCount / 100 + 1).toFixed(0)

  return (
    <div className="card">
      <Link href={`/${post.username}`}>
        <b> By @{post.username}</b>{" "}
      </Link>

      <Link href={`/${post.username}/${post.slug}`}>
        <h2>{post.title}</h2>
      </Link>
      <footer>
        <span>
          {wordCount} words. {minutesToRead} min read
        </span>
        <span> {post.heartCount} Hearts </span>
      </footer>
    </div>
  );
}