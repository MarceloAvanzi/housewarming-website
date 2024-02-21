import React from 'react';
import Header from '../../components/Header';

// import { Container } from './styles';

const Home: React.FC = () => {
    return <div className='min-h-screen min-y-screen bg-house bg-cover bg-blur'>
        <Header />
        <h1>Home</h1>
        <a>
            <h2>Cha de casa nueva</h2>
        </a>
    </div>;
}

export default Home;