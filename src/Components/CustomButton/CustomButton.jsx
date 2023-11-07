const CustomButton = ({title, className, onclick}) => {
    return(
        <div className="bg-[#E4EE00] rounded-md text-center">
            <button className={className} onClick={onclick}>
                {title}
            </button>
        </div>
    );
}

export default CustomButton;