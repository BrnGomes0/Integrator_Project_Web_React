import CustomButton from '../../Components/CustomButton/CustomButton.jsx'

const RegisterScreen = () => {
    return(
        <section className="bg-[#252525] flex justify-center items-center pt-16 p-28">
            <div className='w-1/2 p-20'>
                <img src='https://images.pexels.com/photos/40142/new-york-skyline-manhattan-hudson-40142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Image Bank' className='w-[62.5rem] rounded-lg'/>
            </div>
            <div className='w-1/2 flex flex-col justify-center items-center gap-4'>
                <h1 className='titleRegistred'>Thank you for Registering, </h1>
                <h2 className='text-[#E4EE00] namePerson'>BRUNO</h2>
                <p className='paragraphRegistred text-base'>We are very happy to welcome you</p>
                <CustomButton
                    title='Login'
                    className='w-[19.563rem] h-14'
                />
            </div>
        </section>
    );
};

export default RegisterScreen;