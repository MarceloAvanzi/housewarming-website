import React, { useState } from 'react';
import ProductModal from '../../components/ProductsModal';
import Product from '../../components/Product';
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
            <div className="mx-auto mt-8 max-w-screen-lg">
                <div className="grid grid-cols-2 gap-4" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                    {[...Array(30)].map((_, index) => (
                        <Product key={index} onClick={handleProductClick} />
                    ))}
                </div>
                {selectedProduct && <ProductModal product={selectedProduct} onClose={handleCloseModal} />}
            </div>
        </MainLayout>
    );
};

export default DesireList;
