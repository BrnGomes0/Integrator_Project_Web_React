import CustomInput from "../../Components/CustomInput/CustomInput.jsx";
import CustomButton from "../../Components/CustomButton/CustomButton.jsx"

const LoginScreen = () => {
    const onclickedLogin = () =>{
        console.log("Loged!")
    };
    return(
        <section className="bg-[#252525] pt-16 flex justify-center items-center gap-8 p-28">
            <div className="w-1/2 flex flex-col gap-4 justify-center items-center p-20">
                <h1 className="titleRegistred">Access your account!</h1>
                <p className="text-white">We are happy to see you again</p>
                <img src="https://images.pexels.com/photos/6667892/pexels-photo-6667892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-lg w-[49rem] h-[38rem]"/>
            </div>
            <div className='bg-white flex flex-col justify-center items-center gap-8 rounded-lg w-1/2 p-20'>
                <p>Enter your data:</p>
                <CustomInput
                    placeholder='Email:'
                    type='email'
                />
                <CustomInput
                    placeholder='Password:'
                    type='password'
                />
                <CustomButton
                    title='Login'
                    className='w-96 h-10'
                    onclick={onclickedLogin}
                />
                <p>Don't have a account? <a href="/register" className="text-[#A7BBCE]">Create account</a></p>
            </div>
        </section>
    );
}

export default LoginScreen;