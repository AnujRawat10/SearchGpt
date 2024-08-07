// SignIn.js
import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth, googleProvider } from './firebase';
import './Sign.css'; // Ensure this path matches your CSS file
import Google from './assets/Google.png';

const SignIn = () => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container"> {/* Center the button */}
      <button className="signin-button" onClick={signInWithGoogle}>
        <img src={Google} alt="Google" className="signin-icon" />
        Sign in with Google
      </button>
    </div>
  );
};

export default SignIn;

