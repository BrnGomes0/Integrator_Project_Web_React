import React from "react";

function BoxValues ({firstURL, secondURL, thirdURL, firstTitle, secondTitle, thirdTitle}) {
    return(
        <div className="bg-[#FFF] w-1/2 flex justify-center items-center rounded-lg gap-20 p-12 text-black">
            <div className="flex flex-col justify-center items-center gap-4">
                <img src={firstURL} alt=""/>
                <h1 className="font-bold">{firstTitle}</h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
                <img src={secondURL} alt=""/>
                <h1 className="font-bold">{secondTitle}</h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
                <img src={thirdURL}/>
                <h1 className="font-bold">{thirdTitle}</h1>
            </div>
        </div>
    );
}

export default BoxValues;