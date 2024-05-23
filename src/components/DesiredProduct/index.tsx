import React from 'react';
import desireProductList from '../../data/desireProductList';

interface Product {
    id: number;
    name: string;
    imagePath: string;
    description: string;
}

const DesiredProducts: React.FC<{ onClick: (product: Product) => void }> = ({ onClick }) => {
    const handleClick = (product: Product) => {
        onClick(product);
    };

    return (
        <div >
            {desireProductList.map((product) => (
                <div
                    key={product.id}
                    className="flex items-center p-4 border border-gray-300 h-auto bg-white bg-opacity-30 rounded-xl hover:shadow-md hover:border-black cursor-pointer transition-all"
                    onClick={() => handleClick(product)}
                >
                    <img
                        src={`static/image/${product.imagePath}`}
                        alt={product.name}
                        className="mobile:w-28 lg:w-80 mobile:h-28 lg:h-64 mr-4 rounded-lg outline outline-1 outline-gray-500 shadow-2xl"
                    />
                    <div className="flex-grow">
                        <p className="lg:text-5xl mobile:text-xl font-semibold">{product.name}</p>
                        {/* <p className="text-3xl text-gray-600">${product.price}</p> */}
                    </div>
                </div>
            ))}
        </div>
    );
};
export default DesiredProducts;
