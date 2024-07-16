import React from 'react';
import MainLayout from '../../components/MainLayout';
import TextSection from '../../components/HomeDescription';

const Home: React.FC = () => {
    return (
        <>
            <MainLayout>
                <div className="mx-auto max-w-screen">
                    <div className="p-8 overflow-y-scroll no-scrollbar" style={{ maxHeight: '75vh', overflowY: 'auto' }}>
                        <TextSection
                            title="De: Gabi e Marcelo"
                            content="Como forma de comemoração da conquista do nosso querido lar, gostariamos de convidar todos os familiares para um Chá de Casa Nova."
                            direction="left"
                        />
                        <TextSection
                            title="Como Funciona?"
                            content="Não se preocupe, o churrasco será por nossa conta, contamos com você para nos presentear de acordo com o que ache melhor, ou se estiver em dúvida veja a página de Lista de Presentes."
                            direction="right"
                        />
                        <TextSection
                            title="Porque Participar?"
                            content="É uma chance de desfrutar de boa companhia, comida deliciosa e celebrar um novo começo."
                            direction="left"
                        />
                    </div>
                </div>
            </MainLayout>
        </>
    );
}

export default Home;
