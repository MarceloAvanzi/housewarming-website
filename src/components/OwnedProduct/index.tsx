import React from 'react';
import ownedProducts from '../../data/ownedProducts';
import { motion } from 'framer-motion';
import OwnedProducts from '../../entities/OwnedProducts';

const OwnedProduct: React.FC = () => {
    const variants = (direction: 'left' | 'right') => ({
        hidden: { opacity: 0, x: direction === 'left' ? -100 : 100 },
        visible: { opacity: 1, x: 0 }
    });
    return (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ownedProducts.map((product: OwnedProducts) => (
                <motion.div
                    key={product.id}
                    className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1 }}
                    variants={variants(product.direction)}
                >
                    <img
                        src={`static/image/${product.imagePath}`}
                        alt={product.name}
                        className="w-32 h-32 object-cover rounded mb-3"
                    />
                    <div className="flex-center">
                        <p className="text-lg font-medium text-gray-800">{product.name}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};
export default OwnedProduct;
