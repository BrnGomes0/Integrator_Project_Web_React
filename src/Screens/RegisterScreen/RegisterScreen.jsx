import Navbar from "../../Components/Navbar/Navbar.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import CustomInput from "../../Components/CustomInput/CustomInput.jsx";
import CustomButton from "../../Components/CustomButton/CustomButton.jsx"

const RegisterScreen = () => {
    return(
        <section className="bg-[#252525] pt-16 flex justify-center items-center gap-8">
            <div className="w-1/2">
                <h1 className="text-white text-x1">Welcome to BUBO Bank</h1>
                <p>There is little left to create your BuBo Bank account</p>
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/ae/15/1d/federal-reserve-bank.jpg?w=1200&h=-1&s=1"/>
            </div>
            <div className='bg-white flex flex-col gap-8 rounded-lg w-1/2'>
                <CustomInput
                    placeholder='Complet Name'
                    type='text'
                />
                <CustomInput
                    placeholder='Cpf'
                    type='number'
                />
                <CustomInput
                    placeholder='Nasciment Date (dd/mm/aa)'
                    type='date'
                />
                <CustomInput
                    placeholder='Phone'
                    type='tel'
                />
                <CustomInput
                    placeholder='Email'
                    type='email'
                />
                <CustomInput
                    placeholder='Password'
                    type='password'
                />
                <CustomButton
                    title='Create Account' 
                />
            </div>
        </section>
    );
}

export default RegisterScreen;