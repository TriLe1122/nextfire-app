import React from "react"
import { auth, googleAuthProvider } from "../lib/firebase.js";
import { useContext } from "react";
import { UserContext } from "../lib/context.js";
export default function Enter(props) {
  const {user, username} = useContext(UserContext)

  return (
    <main>
      {user ?
        !username ? <UsernameForm /> : <SignOutButton />
        :
        <SignInButton />}
    </main>
  )
}


function SignInButton() {

  const signInWithGoogle = async () => { auth.signInWithPopup(googleAuthProvider); };

  return (
    <button className="btn-google" onClick={signInWithGoogle}>sign in with google</button>
  );
}

function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign out</button>;
}

function UsernameForm() {

}