const SquareBoxSmaller = ({imageURL, title, body}) => {
    return(
        <div className="bg-[#3e3e3e] grid grid-cols-1 rounded-lg gap-2">
            <div className="w-full">
                <img src={imageURL} alt="" className="w-full h-full rounded-t-lg"/>
            </div>
            <div className="text-white flex flex-col gap-4 p-2 h-1/2">
                <h1 className="font-bold">{title}</h1>
                <p className="text-xs">{body}</p>
                <a href="/">
                    <p className="text-xs text-white flex gap-2">Know More <img className='w-4'src="src/assets/imgs/seta-direita.png" alt="Seta-Direita"/></p>
                </a>
            </div>
        </div>
    );
}

export default SquareBoxSmaller;