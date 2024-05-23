import React from 'react';
import ownedProducts from '../../data/ownedProducts';

interface Product {
    id: number;
    name: string;
    imagePath: string;
}

const OwnedProduct: React.FC = () => {
    return (
        <div >
            {ownedProducts.map((product) => (
                <div
                    key={product.id}
                    className="flex items-center p-4 border border-gray-300 h-auto bg-white bg-opacity-30 rounded-xl hover:shadow-md hover:border-black cursor-pointer transition-all"
                >
                    <img
                        src={`static/image/${product.imagePath}`}
                        alt={product.name}
                        className="mobile:w-28 lg:w-80 mobile:h-28 lg:h-64 mr-4 rounded-lg outline outline-1 outline-gray-500 shadow-2xl"
                    />
                    <div className="flex-grow">
                        <p className="lg:text-5xl mobile:text-xl font-semibold">{product.name}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default OwnedProduct;
