import Navbar from "../../Components/Navbar/Navbar";
import SquareBoxBig from "../../Components/SquareBoxBig/SquareBoxBig";
import SquareBoxSmaller from "../../Components/SquareBoxSmaller/SquareBoxSmaller";

const HomeScreen = () => {
    return(
        <div>
            <Navbar/>
            <section className="bg-[#252525] pt-12 flex flex-col justify-center items-center">
                <div className="">
                    <img src="src/assets/imgs/imageNY.png" alt="Image New York"/>
                </div>
                <h1 className="text-white font-bold text-base title mt-28 text-center">Financial products and services</h1>
                <p className="text-white text-center mt-4 mb-16">Everything Bubo offers you to improve your financial life</p>
                <SquareBoxBig
                    title='Arrived Travel with Bubo'
                    body='Tickets, hotels, food and tours with 10% discount'
                    imageURL='https://img.freepik.com/fotos-premium/a-estatua-da-liberdade-com-o-fundo-do-horizonte-da-cidade-de-manhattan-pontos-turisticos-da-cidade-de-nova-york-eua_255553-377.jpg'
                />
                <SquareBoxSmaller
                    title='Account Digital'
                    body='The best digital account ever created in history'
                    imageURL='https://images.pexels.com/photos/925786/pexels-photo-925786.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                />
                <div></div>
            </section>
        </div>
    );
}

export default HomeScreen;