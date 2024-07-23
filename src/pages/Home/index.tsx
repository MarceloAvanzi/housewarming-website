import React from 'react';
import MainLayout from '../../components/MainLayout';
import HomeDescriptionCard from '../../components/HomeDescription';
import ConfirmPresence from '../../components/ConfirmPresence';

const Home: React.FC = () => {
    return (
        <>
            <MainLayout>
                <div className="mx-auto max-w-screen">
                    <div className="p-6 overflow-y-scroll no-scrollbar" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                        <ConfirmPresence />
                        <HomeDescriptionCard
                            title="🏠 Gabriela e Marcelo"
                            content="Estamos muito felizes em compartilhar a conquista do nosso novo lar com vocês! Gostaríamos de convidar todos os familiares para o nosso Chá de Casa Nova e comemorarmos juntos."
                            direction="left"
                        />
                        <HomeDescriptionCard
                            title="🍖 Como Funciona?"
                            content="Vamos preparar um delicioso churrasco para todos. Gostaríamos da sua presença conosco nesse momento especial! Para nos ajudar a construir esse sonho, te convidamos para ver nossa lista de presentes mas caso prefira pode nos presentear da forma que achar melhor"
                            direction="right"
                        />
                        <HomeDescriptionCard
                            title="📍 Localização"
                            content="Condomínio Parque dos Manacás às 15:00 - R Doutor Motta Junior, n° 2450"
                            direction="left"
                        />
                    </div>
                </div>
            </MainLayout>
        </>
    );
}

export default Home;
