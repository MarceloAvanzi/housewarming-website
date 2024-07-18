import React from 'react';
import desireProductList from '../../data/desireProductList';

interface Product {
    id: number;
    name: string;
    imagePath: string;
    description: string;
}

const DesiredProducts: React.FC<{ onClick: (products: Product) => void }> = ({ onClick }) => {
    const handleClick = (product: Product) => {
        onClick(product);
    };

    return (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {desireProductList.map((product) => (
                <div
                    key={product.id}
                    className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
                    onClick={() => handleClick(product)}
                >
                    <img
                        src={`static/image/${product.imagePath}`}
                        alt={product.name}
                        className="w-32 h-32 object-cover rounded mb-3"
                    />
                    <div className="text-center">
                        <p className="text-lg font-medium text-gray-800">{product.name}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DesiredProducts;