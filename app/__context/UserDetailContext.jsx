"use client"; //add this at the top

import { createContext, useContext, useState } from "react";

export const UserDetailContext = createContext();

export function UserDetailProvider({ children }) {
    const [userDetail, setUserDetail] = useState(null);

    return (
        <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
            {children}
        </UserDetailContext.Provider>
    );
}

export const useUserDetail = () => useContext(UserDetailContext);
