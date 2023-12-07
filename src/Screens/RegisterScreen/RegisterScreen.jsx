// Import necessary dependencies and custom components
import CustomInput from "../../Components/CustomInput/CustomInput.jsx";
import CustomButton from "../../Components/CustomButton/CustomButton.jsx";
import { useState } from "react";
import axios from "axios";

// Functional component for the registration screen
const RegisterScreen = () => {
    // State variables to manage form input values
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function to send registration data to the server
    const saveData = async () => {
        try {
            // Making a POST request to the server with user registration data
            const result = await axios.post(
                'http://127.0.0.1:8000/api/v1/user/create',
                {
                    email: email,
                    password: password,
                    first_name: first_name,
                    last_name: last_name,
                    cpf: cpf,
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }
            );
            // Logging the result data on successful registration
            console.log(result.data);
        } catch (error) {
            // Logging any errors in the console
            console.log(error.response);
        }
    };
    
    // JSX for the registration screen UI
    return(
        <section className="bg-[#252525] pt-16 flex justify-center items-center gap-8 p-28">
            {/* Left section for information and image */}
            <div className="w-1/2 flex flex-col gap-4 justify-center items-center p-20">
                <h1 className="text-white text-xl font-bold">Welcome to BUBO Bank</h1>
                <p className="text-white">There is little left to create your BuBo Bank account</p>
                {/* Image for visual representation */}
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/ae/15/1d/federal-reserve-bank.jpg?w=1200&h=-1&s=1" className="rounded-lg w-[49rem] h-[38rem]"/>
            </div>

            {/* Right section for the registration form */}
            <div className='bg-white flex flex-col justify-center items-center gap-8 rounded-lg w-1/2 p-20'>
                <p>Enter your data:</p>

                {/* CustomInput component for First Name */}
                <CustomInput
                    placeholder='First Name:'
                    type='text'
                    value={first_name}
                    onChange={(txt) =>{
                        setFirst_name(txt.target.value);
                    } }
                />

                {/* CustomInput component for Last Name */}
                <CustomInput
                    placeholder='Last Name:'
                    type='text'
                    value={last_name}
                    onChange={(txt) => {
                        setLast_name(txt.target.value);
                    }}
                />

                {/* CustomInput component for CPF */}
                <CustomInput
                    placeholder='Cpf: '
                    type='cpf'
                    value={cpf}
                    onChange={(txt) => {
                        setCpf(txt.target.value);
                    }}
                />

                {/* CustomInput component for Email */}
                <CustomInput
                    placeholder='Email: '
                    type='email'
                    value={email}
                    onChange={(txt) => {
                        setEmail(txt.target.value);
                    }}
                />

                {/* CustomInput component for Password */}
                <CustomInput
                    placeholder='Password: '
                    type='password'
                    value={password}
                    onChange={(txt) => {
                        setPassword(txt.target.value);
                    }}
                />

                {/* CustomButton component for submitting the form */}
                <CustomButton
                    title='Create Account'
                    className='w-96 h-10'
                    onclick={() => saveData()}
                />
            </div>
        </section>
    );
};

// Export the RegisterScreen component
export default RegisterScreen;
