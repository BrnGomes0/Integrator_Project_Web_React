import CustomInput from "../../Components/CustomInput/CustomInput.jsx";
import CustomButton from "../../Components/CustomButton/CustomButton.jsx"
import api from '../../api/Api.jsx'
import { useState } from "react";


const RegisterScreen = () => {
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const registred = () => {
        try{
            api.post("token/", {
                email: email, 
                password: password,
                first_name: first_name,
                last_name: last_name,
                cpf: cpf,
            }).then(function(response){
                console.log(response.data)
            })
        }catch(error){
            console.log(error)
        }
    }
    return(
        <section className="bg-[#252525] pt-16 flex justify-center items-center gap-8 p-28">
            <div className="w-1/2 flex flex-col gap-4 justify-center items-center p-20">
                <h1 className="text-white text-xl font-bold">Welcome to BUBO Bank</h1>
                <p className="text-white">There is little left to create your BuBo Bank account</p>
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/ae/15/1d/federal-reserve-bank.jpg?w=1200&h=-1&s=1" className="rounded-lg w-[49rem] h-[38rem]"/>
            </div>
            <div className='bg-white flex flex-col justify-center items-center gap-8 rounded-lg w-1/2 p-20'>
                <p>Enter your data:</p>
                <CustomInput
                    placeholder='First Name:'
                    type='text'
                    value={first_name}
                    onChange={(txt) =>{
                        setFirst_name(txt.target.value);
                    } }
                />
                <CustomInput
                    placeholder='Last Name:'
                    type='text'
                    value={last_name}
                    onChange={(txt) => {
                        setLast_name(txt.target.value);
                    }}
                />
                <CustomInput
                    placeholder='Cpf: '
                    type='cpf'
                    value={cpf}
                    onChange={(txt) => {
                        setCpf(txt.target.value);
                    }}
                />
                <CustomInput
                    placeholder='Email: '
                    type='email'
                    value={email}
                    onChange={(txt) => {
                        setEmail(txt.target.value);
                    }}
                />
                <CustomInput
                    placeholder='Password: '
                    type='password'
                    value={password}
                    onChange={(txt) => {
                        setPassword(txt.target.value);
                    }}
                />
                <CustomButton
                    title='Create Account'
                    className='w-96 h-10'
                    onclick={() => registred()}
                />
            </div>
        </section>
    );
};
export default RegisterScreen;