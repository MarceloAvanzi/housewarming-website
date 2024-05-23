import React, { useState } from 'react';
import DesiredProductModal from '../../components/DesiredProductsModal';
import DesiredProduct from '../../components/DesiredProduct';
import MainLayout from '../../components/MainLayout';

const DesireList: React.FC = () => {
    const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

    const handleProductClick = (product: any) => {
        setSelectedProduct(product);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    return (
        <MainLayout>
            <div className="mx-auto max-w-screen">
                <div className="grid grid-cols-1 gap-4 p-4 overflow-y-scroll no-scrollbar" style={{ maxHeight: '75vh', overflowY: 'auto' }}>
                    <DesiredProduct onClick={handleProductClick} />
                </div>
                {selectedProduct && <DesiredProductModal product={selectedProduct} onClose={handleCloseModal} />}
            </div>
        </MainLayout>
    );
};

export default DesireList;
