import React from 'react';
import useFirebase from '../../hooks/Hooks';

const Home = () => {
    const {user}=useFirebase();
    return (
        <div>
            {/* optional chaining condition  */}
            <h2>current user :{user? user.displayName : 'nobody here'}</h2>
        </div>
    );
};

export default Home;