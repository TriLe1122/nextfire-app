import React from "react"
import UserProfile from '../../components/UserProfile.js';
import PostFeed from '../../components/PostFeed.js'
import { getUserWithUsername, postToJSON } from "../../lib/firebase.js";


export async function getServerSideProps({ query }) {
  const { username } = query;

  const userDoc = await getUserWithUsername(username);


  if (!userDoc) {
    return {
      notFound: true
    };
  }

  let user = null;
  let posts = null;

  if (userDoc) {
    user = userDoc.data();
    const postsQuery = userDoc.ref
      .collection('posts')
      .where('published', "==", true)
      .orderBy('createdAt', 'desc')
      .limit(5);
    
    posts = (await postsQuery.get()).docs.map(postToJSON)
  }

  return {
    props: { user, posts},
  }
}


export default function UserProfilePage({user, posts }) {
  return (
    <main>
      <UserProfile user={user} />
      <PostFeed posts={posts} admin={true}/>
    </main>
  )
}