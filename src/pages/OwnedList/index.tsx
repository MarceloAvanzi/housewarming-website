import React from 'react';
import MainLayout from '../../components/MainLayout';
import OwnedProduct from '../../components/OwnedProduct';

const OwnedList: React.FC = () => {
    return (
        <MainLayout>
            <div className="mx-auto max-w-screen">
                <div className="grid grid-cols-1 gap-4 p-4 overflow-y-scroll no-scrollbar" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                    <OwnedProduct />
                </div>
            </div>
        </MainLayout>
    );
};

export default OwnedList;