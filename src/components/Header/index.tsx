import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header: React.FC = () => {
    const location = useLocation();
    const isHome = location.pathname === '/'
    const isDesiredList = location.pathname === '/desire-list'
    const isOwnedList = location.pathname === '/owned-list'

    return (
        <>
            <div className='flex items-center justify-center font-montez font-semibold text'>
                <h1 className="flex items-center lg:text-6xl mobile:text-4xl ml-2 mt-4">Chá de Casa Nova</h1>
            </div>
            <div className='flex items-center justify-center'>
                <header className="flex items-center lg:h-[75px] lg:w-[800px] mobile:h-[50px] mobile:w-[350px] mt-4 text-black rounded-full outline outline-2 outline-slate-950 bg-white">
                    <div className="flex flex-1 justify-center font-semibold lg:text-2xl mobile:text-sm">
                        <Link to={'/'}>
                            <div className={`lg:mr-20 mobile:mr-5 ${isHome ? 'underline' : ''} hover:text-gray-500 cursor-pointer transition-all`}>Início</div>
                        </Link>
                        <Link to={'/desire-list'}>
                            <div className={`lg:mr-20 mobile:mr-5 ${isDesiredList ? 'underline' : ''} hover:text-gray-500 cursor-pointer transition-all`}>Lista de Presentes</div>
                        </Link>
                        <Link to={'/owned-list'}>
                            <div className={`hover:text-gray-500 ${isOwnedList ? 'underline' : ''} cursor-pointer transition-all`}>O que temos?</div>
                        </Link>
                    </div>
                </header>
            </div>
            <hr className="h-px mt-8 bg-gray-400 border-0"></hr>
        </>
    );
};

export default Header;
