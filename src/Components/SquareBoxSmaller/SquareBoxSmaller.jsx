const SquareBoxSmaller = ({imageURL, title, body}) => {
    return(
        <div className="bg-[#3e3e3e] grid grid-cols-1 rounded-lg gap-4">
            <div className="">
                <img src={imageURL} alt="" className=" w-full rounded-t-lg"/>
            </div>
            <div className="text-white flex flex-col gap-2">
                <h1 className="font-bold">{title}</h1>
                <p className="text-xs">{body}</p>
            </div>
            <div className="text-white">
               <a>
                <p className="text-xs font-bold">Know More <FontAwesomeIcon icon="fa-solid fa-arrow-right" style={{color: "#e4ee00"}} /></p>
               </a>
            </div>
        </div>
    );
}

export default SquareBoxSmaller;