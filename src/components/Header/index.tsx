import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <>
            <div className='flex items-center justify-center font-montez font-semibold text'>
                <h1 className="flex items-center lg:text-6xl mobile:text-4xl ml-2 mt-4">Chá de Casa Nova</h1>
            </div>
            <div className='flex items-center justify-center'>
                <header className="flex items-center lg:h-[75px] lg:w-[800px] mobile:h-[50px] mobile:w-[350px] mt-4 text-black rounded-full outline outline-2 outline-slate-950 bg-white">
                    <div className="flex flex-1 justify-center font-semibold lg:text-2xl mobile:text-sm">
                        <Link to={'/'}>
                            <div className="lg:mr-20 mobile:mr-5 hover:text-gray-500 cursor-pointer transition-all">Início</div>
                        </Link>
                        <Link to={'/desire-list'}>
                            <div className="lg:mr-20 mobile:mr-5 hover:text-gray-500 cursor-pointer transition-all">Lista de Presentes</div>
                        </Link>
                        <div className='hover:text-gray-500 cursor-pointer transition-all'>O que temos?</div>
                    </div>
                </header>
            </div>
            <hr className="h-px mt-8 bg-gray-200 border-0 dark:bg-gray-500"></hr>
        </>
    );
};

export default Header;
