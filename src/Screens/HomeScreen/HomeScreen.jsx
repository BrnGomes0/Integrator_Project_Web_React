import Navbar from "../../Components/Navbar/Navbar";
import SquareBoxBig from "../../Components/SquareBoxBig/SquareBoxBig";

const HomeScreen = () => {
    return(
        <div>
            <Navbar/>
            <section className="bg-[#252525] pt-12">
                <div className="">
                    <img src="src/assets/imgs/imageNY.png" alt="Image New York"/>
                </div>
                <h1 className="text-white font-bold text-base title mt-28 text-center">Financial products and services</h1>
                <p className="text-white text-center mt-4">Everything Bubo offers you to improve your financial life</p>
                <SquareBoxBig/>
            </section>
        </div>
    );
}

export default HomeScreen;