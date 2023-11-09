import React from "react";
import { NavLink } from "react-router-dom";

const ContextNavbar = () => {
    let links = [
        {name: "About", link:"/"},
        {name: "Transparent", link:"/"},
        {name: "Costs", link:"/"},
        {name: "Tools", link:"/"},
        {name: "Service", link:"/"}
    ];
    return(
        <div className="navContext">
            {/* <ul className="text-white flex w-[35rem] justify-between">
                <li className="inline">
                    <a href="/" className="hover:underline hover:border-b-2 border-transparent border-b">About</a>
                </li>
                <li className="inline">
                    <a href="https://statusinvest.com.br/acoes" className="hover:underline hover:border-b-2 border-transparent border-b">Investments</a>
                </li>
                <li className="inline">
                    <a href="/" className="hover:underline hover:border-b-2 border-transparent border-b">Costs</a>
                </li>
                <li className="inline">
                    <a href="/" className="hover:underline hover:border-b-2 border-transparent border-b">Tools</a>
                </li>
                <li className="inline">
                    <a href="/" className="hover:underline hover:border-b-4 border-transparent border-b">Service</a>
                </li>
            </ul> */}
            <ul className="text-white flex w-[35rem] justify-between">
                {
                    links.map((link) =>(
                        <li className="inline">
                            <a href={link.link} className="hover:underline hover:border-b-2 border-transparent border-b">{link.name}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default ContextNavbar;