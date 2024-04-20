'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function Store() {
    const router = useRouter();

    useEffect(() => {
        // Check if the user is logged in
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn !== 'true') {
            // Redirect to the login page if not logged in
            router.push('/login');
        }
    }, []);

    function handleLogout() {
        // Clear login status in local storage
        localStorage.setItem('isLoggedIn', "false");
        // Redirect to the login page
        router.push('/login');
    }

    return (
        <div className='store'>
            <h2>Welcome to the store!</h2>
            <button className='logout-btn' onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
}

export default Store;
