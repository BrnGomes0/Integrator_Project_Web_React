import React from "react";

function PageError(){
    return(
        <section className="bg-[#252525] flex flex-col justify-center items-center text-white pt-20">
            <div className="w-1/2 flex justify-center items-center">
                <img src="src\assets\imgs\fantasmawithout.png" alt=""/>
            </div>
            <div className="w-1/2 flex justify-center text-center pb-24">
               <h1 className="flex gap-2 text-[#E4EE00] text-4xl font-montserrat">ERRROR 400 <h1 className="flex gap-2 text-[#E4EE00] text-4xl">|</h1><p className="text-white text-2xl font-bruno
               "> BuBo</p></h1>
            </div>
        </section>
    );
}
export default PageError;