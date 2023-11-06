import Navbar from "../../Components/Navbar/Navbar.jsx";
import SquareBoxBig from "../../Components/SquareBoxBig/SquareBoxBig.jsx";
import SquareBoxSmaller from "../../Components/SquareBoxSmaller/SquareBoxSmaller.jsx";
import BoxPriceAccount from "../../Components/BoxPriceAccount/BoxPriceAccount.jsx";
import Footer from "../../Components/Footer/Footer.jsx"

const HomeScreen = () => {
    return(
        <section className="bg-[#252525] pt-16 flex flex-col justify-center items-center">
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
            <div className="grid grid-cols-2 w-1/2 gap-x-2 gap-y-10 pt-20">
                <SquareBoxSmaller
                    title='Account Digital'
                    body='The best digital account ever created in history'
                    imageURL='https://images.pexels.com/photos/1181414/pexels-photo-1181414.jpeg'
                />
                <SquareBoxSmaller
                title='Monitoring Investments'
                body='Have a specialized follow-up with certified people'
                imageURL='https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                />
                <SquareBoxSmaller
                    title='CashBack 10%'
                    body='Credit card with 10% cashback in Bubo'
                    imageURL='https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                />
                <SquareBoxSmaller
                    title='Online Service'
                    body='24-hour customer service'
                    imageURL='https://images.pexels.com/photos/7690086/pexels-photo-7690086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                />
                <SquareBoxSmaller
                    title='Market news'
                    body='First-hand market news, for bubo customers'
                    imageURL='https://images.pexels.com/photos/3531895/pexels-photo-3531895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                />
                <SquareBoxSmaller
                    title='Mobile Version'
                    body='New version, BuBo in mobile version. Create account'
                    imageURL='https://images.pexels.com/photos/225232/pexels-photo-225232.jpeg?auto=compress&cs=tinysrgb&w=600'
                />
            </div>
            <div className="pt-40 text-white flex flex-col justify-center text-center gap-6 pb-40">
                <h1 className="font-bold titleTwo">Discover the best platforms available to you</h1>
                <p>Customize your experience even further with the best bank ever created!</p>
            </div>
            <div className="grid grid-cols-3 gap-10 mb-40">
                <BoxPriceAccount
                    title='Essential Plain'
                    initialPrice={false}
                    value='$28.22'
                    chosed={false}
                    type='Personal'
                />
                <BoxPriceAccount
                    title='Advanced Plan'
                    initialPrice={true}
                    value='$29.98'
                    chosed={true}
                    type='Investor'
                />
                <BoxPriceAccount
                    title='Elite Plan'
                    initialPrice={true}
                    value='$34.98'
                    chosed={false}
                    type='Entrepreneur'
                />
            </div>
        </section>
    );
}

export default HomeScreen;