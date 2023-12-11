// Importing the CustomButton component from its location
import axios from 'axios';
import CustomButton from '../../Components/CustomButton/CustomButton.jsx'
import { useState } from 'react';

// Functional component for the registration success screen
const RegisterScreen = () => {
    // JSX for the registration success screen UI
    return (
        <section className="bg-[#252525] flex justify-center items-center pt-16 p-28">
            {/* Left section with an image */}
            <div className='w-1/2 p-20'>
                {/* Image representing the Bank */}
                <img src='https://images.pexels.com/photos/40142/new-york-skyline-manhattan-hudson-40142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Image Bank' className='w-[62.5rem] rounded-lg'/>
            </div>

            {/* Right section with registration success message and login button */}
            <div className='w-1/2 flex flex-col justify-center items-center gap-4'>
                {/* Title for the registration success message */}
                <h1 className='titleRegistred'>Thank you for Registering, </h1>

                {/* Name of the registered person with a specific styling */}
                <h2 className='text-[#E4EE00] namePerson'>{first_name}</h2>

                {/* Paragraph with a welcoming message */}
                <p className='paragraphRegistred text-base'>We are very happy to welcome you</p>

                {/* CustomButton component for navigating to the login screen */}
                <CustomButton
                    title='Login'
                    className='w-[19.563rem] h-14'
                />
            </div>
        </section>
    );
};

// Export the RegisterScreen component
export default RegisterScreen;
