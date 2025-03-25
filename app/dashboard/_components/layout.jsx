import React from 'react';

// This layout acts as a wrapper for all dashboard components and provides a background blur effect
export default function Layout({ children }) {
  return (
    //min-h-screen w-full bg-gray-50 overflow-hidden (this was removed from the first div to remove the annoying background box)
    <div>
      {/* 🔹 Top Gradient Blur Effect */}
      <div className="fixed inset-x-0 top-0 -translate-y-1/2 transform-gpu overflow-hidden blur-3xl z-0 ">
        <div 
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[82rem] -translate-x-1/2 rotate-[30deg] 
                    bg-gradient-to-tr from-purple-600 to-blue-400 opacity-25 "
          style={{
            height: '40vh', // Covers half the viewport height
            clipPath: 'polygon(100 0, 100% 0, 100% 100%, 0 80%)' // Custom shape for the blur
          }}
        />
      </div>

      {/* 🔹 Bottom Gradient Blur Effect */}
      <div className="fixed inset-x-0 bottom-0 translate-y-1/2 transform-gpu overflow-hidden blur-3xl z-0">
        <div 
          className="relative left-[calc(50%+11rem)] aspect-[1155/678] w-[82rem] -translate-x-1/2 rotate-[-30deg] 
                    bg-gradient-to-tr from-purple-600 to-blue-400 opacity-50"
          style={{
            height: '50vh', // Covers half the viewport height
            clipPath: 'polygon(20 20%, 100% 0, 100% 100%, 0 100%)' // Custom shape for the blur
          }}
        />
      </div>

      {/* 🔹 Content Wrapper */}
      {/* Ensures all child components appear above the blur effect */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

