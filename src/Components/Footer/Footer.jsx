const Footer = () => {
    return(
        <div className="bg-[#3e3e3e] flex flex-col p-20">
                <ul className="flex ">
                    <ul className="flex p-4 gap-x-2">
                        <li>
                        <img src="src/assets/imgs/facebook.png" alt="Facebook Icone"/>
                    </li>
                    <li>
                        <img src="src/assets/imgs/instagram.png" alt="Facebook Icone"/>
                    </li>
                    <li>
                        <img src="src/assets/imgs/linkedin.png" alt="Facebook Icone"/>
                    </li>
                    <li>
                        <img src="src/assets/imgs/twitter.png" alt="Facebook Icone"/>
                    </li>
                    <li>
                        <img src="src/assets/imgs/youtube.png" alt="Facebook Icone"/>
                    </li>
                    </ul>

                    <ul className="flex gap-x-2 p-4">
                        <li>
                        <img src="src/assets/imgs/appStore.png" alt="Facebook Icone"/>
                        </li>
                    <li>
                        <img src="src/assets/imgs/googlePlay.png" alt="Facebook Icone"/>
                    </li>
                    </ul>
                </ul>
            <hr className="w-[107.5rem]"/>
            <div className="text-white font-montserrat flex gap-20">
                <p>© 2023 BUBO BANK S.A. CNPJ: 23.678.921/0001-01</p>
                <p>Manhattan | NY - The Stack, at 1133 Melville Street . CEP: 10001</p>
            </div>
        </div>
        
    );
}
export default Footer;  