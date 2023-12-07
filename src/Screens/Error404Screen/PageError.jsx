// Importando o React
import React from "react";

// Definindo o componente PageError
function PageError() {
    // Estrutura JSX para a página de erro 404
    return (
        // Seção principal com um fundo escuro
        <section className="bg-[#252525] flex flex-col justify-center items-center text-white pt-20">
            {/* Divisão para a imagem */}
            <div className="w-1/2 flex justify-center items-center">
                {/* Imagem de um fantasma */}
                <img src="src\assets\imgs\fantasmawithout.png" alt=""/>
            </div>

            {/* Divisão para a mensagem de erro */}
            <div className="w-1/2 flex justify-center text-center pb-24">
                {/* Título de erro com o número 404 e o nome "BuBo" */}
                <h1 className="flex gap-2 text-[#E4EE00] text-4xl font-montserrat">
                    ERRROR 404
                    <h1 className="flex gap-2 text-[#E4EE00] text-4xl">|</h1>
                    <p className="text-white text-2xl font-bruno"> BuBo</p>
                </h1>
            </div>
        </section>
    );
}

// Exportando o componente PageError
export default PageError;
