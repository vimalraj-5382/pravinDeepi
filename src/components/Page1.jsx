import React from 'react';
import { useNavigate } from 'react-router-dom';

const Page1 = () => {
    const navigate = useNavigate();

    const Heart = () => {
        navigate("/love"); // Proper React Router navigation
    };

    return (
        <div>
            <h1>Oii Chella Kutty</h1>
            <h3>Click to Accept My Love</h3>
            <button onClick={Heart}>P . J</button>
        </div>
    );
};

export default Page1;