"use client"; // Add this at the top

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useUserDetail } from "./__context/UserDetailContext"; // Import context

function Provider({ children }) {
    const { user } = useUser();
    const { setUserDetail } = useUserDetail(); // Get context setter

    useEffect(() => {
        if (user) VerifyUser();
    }, [user]);

    const VerifyUser = async () => {
        try {
            const response = await axios.post("/api/verify-user", { user });
            console.log("User verification response:", response.data);
            setUserDetail(response.data.result); // Store user data in context
        } catch (error) {
            console.error("Error verifying user:", error);
        }
    };

    return <>{children}</>;
}

export default Provider;
