import { useState } from "react";

const CustomInput = ({placeholder, type, value, onChange}) => {
    return(
        <div>
            <input type={type} placeholder={placeholder} className="bg-[#D9D9D9] rounded-md w-96 h-16 text-[#5F4B4B] text-xs p-2" value={value} onChange={onChange}/>
        </div>
    );
};

export default CustomInput;