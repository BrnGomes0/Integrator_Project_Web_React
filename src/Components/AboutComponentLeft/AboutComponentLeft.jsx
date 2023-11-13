import React from "react";

function AboutComponentLeft(props){
    return(
        <div className="flex justify-center items-center pt-20 gap-20 p-20">
            <div className="w-1/2">
                
                <img src={props.imageURL} className="rounded-lg"/>
            </div>
            <div className="flex flex-col justify-center items-center w-1/2 gap-10">
                 <h1 className="text-[#E4EE00] text-3xl font-bold">{props.title}</h1>
                <p className="text-white text-xs text-center">{props.paragraph}</p>            
            </div>
        </div>
    );
}

export default AboutComponentLeft;