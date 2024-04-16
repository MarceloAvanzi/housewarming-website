import React from 'react';
// import QRCode from 'react-qr-code';

const ProductModal: React.FC<{ product: any; onClose: () => void }> = ({ product, onClose }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">{product.name}</h2>
                <img src={product.image} alt={product.name} className="w-64 h-64 object-cover mb-4" />
                <p className="text-lg mb-4">${product.price}</p>
                {/* <div className="mb-4">
                    <QRCode value={product.name} />
                </div> */}
                <button onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
                    Close
                </button>
            </div>
        </div>
    );
};

export default ProductModal;