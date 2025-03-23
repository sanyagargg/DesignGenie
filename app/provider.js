"use client"; 
import { useUser } from '@clerk/nextjs';
import React, { useEffect } from 'react';

function Provider({ children }) {
  const { user } = useUser(); // Get the logged-in user's data

  // Function to verify user
  const VerifyUser = () => {
    console.log("Verifying user...");
  };

  useEffect(() => {
    if (user) {
      VerifyUser(); // Call the function properly
    }
  }, [user]); // Runs when `user` changes

  return <div>{children}</div>;
}

export default Provider;
