import CustomButton from "../CustomButton/CustomButton";
const SquareBoxBig = ({title, imageURL, body}) => {
    return(
        <div className="bg-[#3e3e3e] flex rounded-lg">
            <div className="flex flex-col  justify-center items-center w-1/2 gap-14">
                <div className="text-white text-center flex flex-col justify-center items-center gap-6">
                    <h1 className="font-bold text-lg">{title}</h1>
                    <p className="text-xs w-72">{body}</p>
                </div>
                <div className="text-black">
                        <CustomButton
                        title='Read More'
                        className='w-32 h-8'
                        />
                </div>
            </div>
            <div className="w-1/2">
                <img src={imageURL} alt="" className="rounded-lg h-64 w-full"/>
            </div>
        </div>
    );
}

export default SquareBoxBig;