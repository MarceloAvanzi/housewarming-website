import React from 'react';
import desireProductList from '../../data/desireProductList';
import { motion } from 'framer-motion';
import Product from '../../entities/DesiredProduct';

const DesiredProducts: React.FC<{ onClick: (products: Product) => void }> = ({ onClick }) => {
    const handleClick = (product: Product) => {
        onClick(product);
    };

    // Define motion variants
    const variants = (direction: 'left' | 'right') => ({
        hidden: { opacity: 0, x: direction === 'left' ? -100 : 100 },
        visible: { opacity: 1, x: 0 }
    });

    return (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {desireProductList.map((product) => (
                <motion.div
                    key={product.id}
                    className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
                    onClick={() => handleClick(product)}
                    initial="hidden"
                    animate="visible"
                    variants={variants(product.direction)}
                    transition={{ duration: 1 }}
                >
                    <img
                        src={`static/image/${product.imagePath}`}
                        alt={product.name}
                        className="w-32 h-32 object-cover rounded mb-3"
                    />
                    <div className="text-center">
                        <p className="text-lg font-medium text-gray-800">{product.name}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default DesiredProducts;
