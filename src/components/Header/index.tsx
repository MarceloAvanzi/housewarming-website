import React from 'react';

const Header: React.FC = () => {
    return (
        <div className='flex items-center justify-center'>
            <header className="flex items-center h-[75px] w-[800px] mt-4 text-black rounded-full outline outline-2 outline-slate-950 bg-white">
                <div className="flex flex-1 justify-center font-semibold text-2xl">
                    <div className="mr-20 hover:text-gray-500 cursor-pointer transition-all">Início</div>
                    <div className="mr-20 hover:text-gray-500 cursor-pointer transition-all">Lista de Presentes</div>
                    <div className='hover:text-gray-500 cursor-pointer transition-all'>O que temos?</div>
                </div>
            </header>
        </div>
    );
};

export default Header;
