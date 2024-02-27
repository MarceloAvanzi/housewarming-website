import React from 'react';
import Header from '../../components/Header';

// import { Container } from './styles';

const Home: React.FC = () => {
    return (
        <>
            <div className='flex justify-center min-h-screen min-y-screen bg-house bg-cover'>
            <Header />
            </div>
        </>
    );
}

export default Home;