import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import DesiredProductModal from '../../components/DesiredProductsModal';
import DesiredProduct from '../../components/DesiredProduct';
import MainLayout from '../../components/MainLayout';
import Product from '../../entities/DesiredProduct';

const DesireList: React.FC = () => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const handleProductClick = (product: Product) => {
        setSelectedProduct(product);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    return (
        <MainLayout>
            <div className="mx-auto max-w-screen-lg">
                <div className="p-4 overflow-y-scroll no-scrollbar" style={{ maxHeight: '75vh', overflowY: 'auto' }}>
                    <DesiredProduct onClick={handleProductClick} />
                </div>
                <AnimatePresence>
                    {selectedProduct && (
                        <DesiredProductModal product={selectedProduct} onClose={handleCloseModal} />
                    )}
                </AnimatePresence>
            </div>
        </MainLayout>
    );
};

export default DesireList;
