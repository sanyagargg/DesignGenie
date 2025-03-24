"use client"
import { Button } from '../../../components/ui/button';
import { useUser } from '@clerk/nextjs'
import React, { useState } from 'react'
import EmptyState from './EmptyState';

function MidSection() {
    // Get user details
    const { user } = useUser();
    
    // State to store user-designed rooms
    const [userRoomList, setUserRoomList] = useState([]);

    return (
        <div>
            <div className='flex items-center justify-between'>
                <h2 className='font-bold text-3xl'>Hello, {user?.firstName} {user?.lastName}</h2>
                <Button className="bg-blue-700 text-white hover:bg-blue-500">+ Redesign Room</Button>
            </div>

            {/* Empty state when userRoomList is empty */}
            {userRoomList.length === 0 ? (
                // Import and use EmptyState component
                <div>
                    {/* EmptyState component goes here */}
                    <EmptyState/>
                </div>
            ) : (
                <div>
                    {/* Listing component goes here */}
                </div>
            )}
        </div>
    );
}

export default MidSection;