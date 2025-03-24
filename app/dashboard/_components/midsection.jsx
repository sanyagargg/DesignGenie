"use client"; // Required for client-side rendering
import { Button } from '../../../components/ui/button';
import { useUser } from '@clerk/nextjs';
import React, { useState } from 'react';
import EmptyState from './EmptyState';
import Layout from './layout'; // Import the new Layout component

function MidSection() {
    // Get logged-in user details using Clerk's useUser hook
    const { user } = useUser();
    
    // State to manage the list of user-created room designs
    const [userRoomList] = useState([]); // Currently empty, will be used for listing designs later

    return (
      <Layout> {/* Wrap everything inside the Layout component for background effect */}
        <div className="px-6 pt-14 lg:px-8">
          {/* 🔹 Header Section */}
          <div className="py-2">
            <div className="justify-between items-start mb-16">
              {/* Display user name */}
              <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-blue-800">
                  Welcome, {user?.firstName}
                </h1>
              </div>
            </div>

            {/* 🔹 Conditional Rendering for Empty State or Room Listing */}
            {userRoomList.length === 0 ? (
              <div className="mt-16">
                {/* Show EmptyState component when there are no room designs */}
                <EmptyState />
              </div>
            ) : (
              <div className="mt-16">
                {/* Room listing will be added here when designs exist */}
              </div>
            )}
          </div>
        </div>
      </Layout>
    );
}

export default MidSection;
