import React, { ReactNode } from 'react';
import Header from '../../components/Header';

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            <div className='min-h-screen min-y-screen bg-house bg-center lg:bg-[length:2000px_1000px] mobile:bg-[length:900px_820px]'>
                <Header />
                <main className='flex-grow'>{children}</main>
            </div>
        </>
    )
}

export default MainLayout;
