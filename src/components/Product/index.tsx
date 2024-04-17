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
            className="flex items-center p-4 border border-gray-300 h-auto bg-white bg-opacity-30 rounded-xl hover:shadow-md hover:border-black cursor-pointer"
            onClick={handleClick}
        >
            <img src={product.image} alt={product.name} className="mobile:w-24 lg:w-auto h-auto mr-4 rounded-lg" />
            <div className="flex-grow">
                <p className="lg:text-5xl mobile:text-xl font-semibold">{product.name}</p>
                {/* <p className="text-3xl text-gray-600">${product.price}</p> */}
            </div>
        </div>
    );
};

export default Products;
