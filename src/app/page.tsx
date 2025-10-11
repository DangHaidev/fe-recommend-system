import React from 'react';
import Home from './(main)/home/page';
import { auth, signIn } from '../auth';

const HomePage = async () => {
     const session = await auth()
     console.log(">>>> session", session)
    return (
        <main>
            <Home />
        </main>
    );
};

export default HomePage;
