import { useState } from "react";

const CustomInput = ({placeholder, type}) => {
    const [completName, setCompletName] = useState("");
    const [cpf, setCpf] = useState("");
    const [nascimentDate, setNascimentDate] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return(
        <div>
            <input type={type} placeholder={placeholder} className="bg-[#D9D9D9] rounded-md w-72 h-16"/>
        </div>
    );
};

export default CustomInput;