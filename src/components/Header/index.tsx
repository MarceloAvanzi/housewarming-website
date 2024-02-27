import React from 'react';

const Header: React.FC = () => {
    return (
        <header className=" flex items-center h-[50px] w-[1000px] mt-10 text-black rounded-full outline outline-2 outline-slate-950 bg-white">
            <div>
                <h1 className="text-4xl ml-2">Chá de Casa Nova</h1>
            </div>
            <div className="flex flex-1 justify-center">
                <div className="mr-4 font-semibold hover:text-gray-500 cursor-pointer transition-all">Lista de Presentes</div>
                <div className="mr-4 font-semibold hover:text-lg hover:shadow-lg cursor-pointer transition-all">Início</div>
                <div className='font-semibold hover:text-lg hover:shadow-lg cursor-pointer transition-all'>Itens Nossos</div>
            </div>
        </header>
    );
};

export default Header;
