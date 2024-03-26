import React from 'react';
import { faker } from '@faker-js/faker';

interface Product {
    name: string;
    image: string;
    price: string;
}

const generateFakeProduct = (): Product => ({
    name: faker.commerce.productName(),
    image: faker.image.imageUrl(),
    price: faker.commerce.price(),
});

const Products: React.FC<{ onClick: (product: Product) => void }> = ({ onClick }) => {
    const product = generateFakeProduct();

    const handleClick = () => {
        onClick(product);
    };

    return (
        <div
            className="flex items-center p-5 border border-gray-300 bg-white rounded-xl hover:shadow-md hover:border-black cursor-pointer"
            onClick={handleClick}
        >
            <img src={product.image} alt={product.name} className="w-24 h-auto mr-4" />
            <div className="flex-grow">
                <p className="text-lg font-semibold">{product.name}</p>
                <p className="text-gray-600">${product.price}</p>
            </div>
        </div>
    );
};

export default Products;
