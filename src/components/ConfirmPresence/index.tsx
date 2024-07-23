import React from 'react';
import '../../static/ConfirmPresence.css';

const ConfirmPresence: React.FC = () => {
    return (
        <div className='neon-button-container'>
            <a href='https://wa.me/5541996416590?text=Confirmo%20presença%20no%20chá%20de%20casa%20nova!!%20✨🏠' target='_blank' rel='noopener noreferrer'>
                <button className='neon-button'>
                    Confirmar Presença
                </button>
            </a>
        </div>
    );
}

export default ConfirmPresence;
