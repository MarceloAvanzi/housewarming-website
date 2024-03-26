import React, { ReactNode } from 'react';
import Header from '../../components/Header';

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            <div className='min-h-screen min-y-screen bg-house bg-cover opacity-70'>
                <Header />
                <main className='flex-grow'>{children}</main>
            </div>
        </>
    )
}

export default MainLayout;
