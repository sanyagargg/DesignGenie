"use client"; 
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import React, { useEffect } from 'react';



function Provider({ children }) {
  const { user } = useUser(); // Get the logged-in user's data

  useEffect(() => {
    if (user) {
      VerifyUser();
    }
  }, [user]); // Runs when `user` changes

  // Function to verify user
  const VerifyUser = async () => {
    try {
      const response = await axios.post('/api/verify-user', { user }); // ✅ Send user data in body
      console.log("User verification response:", response.data);
    } catch (error) {
      console.error("Error verifying user:", error);
    }
  };

  return <div>{children}</div>;
}

export default Provider;
