import CustomInput from "../../Components/CustomInput/CustomInput.jsx";
import CustomButton from "../../Components/CustomButton/CustomButton.jsx"

const RegisterScreen = () => {
    const onclickedCreateAccount = () =>{
        console.log("Created Account!")
    };
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
                    placeholder='Complet Name:'
                    type='text'
                />
                <CustomInput
                    placeholder='Cpf:'
                    pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                    type='number_format'
                />
                <CustomInput
                    placeholder='Nasciment Date (dd/mm/aa)'
                    type='date'
                />
                <CustomInput
                    placeholder='Phone:'
                    type='tel'
                />
                <CustomInput
                    placeholder='Email:'
                    type='email'
                />
                <CustomInput
                    placeholder='Password:'
                    type='password'
                />
                <CustomButton
                    title='Create Account'
                    className='w-96 h-10'
                    onclick={onclickedCreateAccount}
                />
            </div>
        </section>
    );
};
export default RegisterScreen;