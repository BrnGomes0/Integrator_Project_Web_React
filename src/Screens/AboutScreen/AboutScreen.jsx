import React from "react";
import BoxValues from "../../Components/BoxValues/BoxValues";

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
        </section>
    );
}

export default AboutScreen;