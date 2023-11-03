import { useState } from "react";

const BoxPriceAccount = ({title, initialPrice, value, chosed, type}) => {
    const [moreChosed, setMoreChosed] = useState(chosed);
    const [price, setPrice] = useState(initialPrice);
    return(
        <div className="bg-[#3E3E3E] flex flex-col  justify-center items-center rounded-lg gap-y-6 p-4"> 
            <div>
                {
                    moreChosed ? <div className="bg-[#E4EE00] text-black rounded-md w-40 h-8 flex justify-center items-center ">More Chosed</div> : <></>
                }
            </div>
            <h1 className="text-white text-2xl italic font-thin">{title}</h1>
            <img src='src/assets/imgs/iconeConts.png' alt='Logo Icone' className ="w-32"/> 
            <div className="">
                {
                    initialPrice ? <h1 className="text-[#E4EE00]">{value} p/Month</h1> : <h1 className="text-[#E4EE00]">Free</h1>
                }
            </div>
            <div className="bg-[#717171] rounded-md w-40 h-8 flex justify-center items-center">
                <p className="text-white">{type}</p>
            </div>
        </div>
    );
}
export default BoxPriceAccount;