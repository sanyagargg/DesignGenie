"use client";  // Since Header component uses React hooks (useContext), mark it as a client component 

import { UserDetailContext } from '../../__context/UserDetailContext';//fixed import path
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import React, { useContext } from 'react';

function Header() {
    const { userDetail, setUserDetail } = useContext(UserDetailContext);

    return (
        <div className='p-5 shadow-sm flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
                <Image src='/logo.svg' width={40} height={40} alt="Logo" />
                <h2 className='font-bold text-lg text-blue-700'>DesignGenie</h2>
            </div>

            <div className='flex gap-8 items-center'>
                <div className='flex gap-2 p-1 items-center bg-slate-100 px-3 rounded-full'>
                    <Image src='/star.svg' width={20} height={20} alt="Credits" />
                    <h3>{userDetail?.credits ?? 0}</h3>  {/*Display user credits properly */}
                </div>
                <UserButton />
            </div>
        </div>
    );
}

export default Header;
