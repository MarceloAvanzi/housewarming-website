import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="flex justify-between py-6 mr-10 ml-10 mt-10 text-black rounded-full outline outline-2 outline-slate-950 bg-background-house bg-cover">
            <div>
                <h1 className="text-4xl ml-2">Chá de Casa Nova</h1>
            </div>
            <div className="flex flex-1 justify-center">
                <div className="mr-4">Desire List</div>
                <div className="mr-4">Home</div>
                <div>Owned Products</div>
            </div>
        </header>
    );
};

export default Header;
