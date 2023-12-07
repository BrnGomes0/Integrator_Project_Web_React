// Importing necessary components
import CustomInput from "../../Components/CustomInput/CustomInput.jsx";
import CustomButton from "../../Components/CustomButton/CustomButton.jsx"

// Defining the LoginScreen component
const LoginScreen = () => {
    // Function to handle login button click
    const onclickedLogin = () => {
        console.log("Logged!");
    };

    // JSX structure for the login screen
    return (
        <section className="bg-[#252525] pt-16 flex justify-center items-center gap-8 p-28">
            {/* Left section with welcome message and image */}
            <div className="w-1/2 flex flex-col gap-4 justify-center items-center p-20">
                <h1 className="titleRegistred">Access your account!</h1>
                <p className="text-white">We are happy to see you again</p>
                {/* Image element with a URL */}
                <img src="https://images.pexels.com/photos/6667892/pexels-photo-6667892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full rounded-lg w-[49rem] h-[38rem]" alt="Login Screen Image" />
            </div>

            {/* Right section with login form */}
            <div className='bg-white flex flex-col justify-center items-center gap-8 rounded-lg w-1/2 p-20'>
                <p>Enter your data:</p>

                {/* CustomInput component for email */}
                <CustomInput
                    placeholder='Email:'
                    type='email'
                />

                {/* CustomInput component for password */}
                <CustomInput
                    placeholder='Password:'
                    type='password'
                />

                {/* CustomButton component for login */}
                <CustomButton
                    title='Login'
                    className='w-96 h-10'
                    onclick={onclickedLogin}
                />

                {/* Link to the registration page */}
                <p>Don't have an account? <a href="/register" className="text-[#A7BBCE]">Create account</a></p>
            </div>
        </section>
    );
}

// Exporting the LoginScreen component
export default LoginScreen;