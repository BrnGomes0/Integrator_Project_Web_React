import React from "react";
import BoxValues from "../../Components/BoxValues/BoxValues";
import AboutComponent from "../../Components/AboutComponentRight/AboutComponent";
import AboutComponentLeft from "../../Components/AboutComponentLeft/AboutComponentLeft";

function AboutScreen () {
    return(
        <section className="bg-[#252525] pt-16 flex flex-col text-white">
            <div className="">
                <img src="src/assets/imgs/about.png"/>
            </div>
            <h1 className="font-bold text-4xl flex justify-center items-center pt-10">BuBo Values</h1>
            <div className="flex justify-center items-center pt-9 pb-9">
                <BoxValues
                    titlePage='BUBO VALUES'
                    firstURL='https://cdn-icons-png.flaticon.com/256/6009/6009978.png'
                    secondURL='https://cdn-icons-png.flaticon.com/256/10017/10017583.png'
                    thirdURL='https://data.market-clock.com/images/b3_128x128@2x.png'
                    firstTitle='First Client'
                    fistParagraph='We always put the customer first at BuBo'
                    secondTitle='Best Prices'
                    secondParagraph='Bubo offers the best rates and prices'
                    thirdTitle='B3 Recommended'
                    thirdParagraph='Bubo is recommended by B3 in the financial market'
                />
            </div>
            <div className="">
                <AboutComponent
                    title = 'BuBo Created 1992'
                    paragraph = 'In the bustling heart of New York City, a financial legend was born with the advent of Bubo, the citys premier all-digital bank. As the visionary brainchild of Bruno Bosch, Bubo emerged as a groundbreaking financial institution, redefining the banking experience for a digital age. Nestled among the iconic skyscrapers of Manhattan, Bubo stands as a testament to innovation and convenience, offering a seamless blend of cutting-edge technology and personalized financial services. With a commitment to simplicity and security, Bubo has become a beacon for tech-savvy individuals seeking a modern banking solution. From intuitive mobile apps to virtual customer support, Bubo has set a new standard for banking in the digital era, solidifying its place as a legend in the financial landscape of New York City.'
                    imageURL = 'https://images.pexels.com/photos/15284311/pexels-photo-15284311/free-photo-of-construcao-predio-edificio-cidade.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                />
                <AboutComponentLeft
                    title = 'Why BuBo?'
                    paragraph = "In the dynamic world of finance, the name Bruno Bosch resonates as a legend in the realm of business and banking. With an entrepreneurial spirit that knows no bounds, Bruno Bosch has carved an indelible mark on the financial landscape. As a visionary businessperson, Bruno Bosch not only leads but shapes the industry, propelling their bank to unprecedented heights. The legend is not merely built on profits and success, but on a commitment to innovation, integrity, and unwavering dedication to client satisfaction. BrunoBosc's journey is a saga of relentless ambition, strategic acumen, and a profound understanding of the ever-evolving dynamics of the financial world. A true luminary, Bruno Bosch stands as an inspiration for aspiring entrepreneurs and a symbol of excellence in the world of banking—a legend whose story continues to unfold with each chapter of success."
                    imageURL = 'https://images.pexels.com/photos/3771073/pexels-photo-3771073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 '
                />
            </div>
        </section>
    );
}

export default AboutScreen;