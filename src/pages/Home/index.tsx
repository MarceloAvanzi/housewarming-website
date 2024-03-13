import React from 'react';
import Header from '../../components/Header';
import Title from '../../components/Title';

const Home: React.FC = () => {
    return (
        <>
            <div className='min-h-screen min-y-screen bg-house bg-cover opacity-70'>
                <Title />
                <Header />
            </div>
        </>
    );
}

export default Home;