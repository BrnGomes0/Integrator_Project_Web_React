import React from "react";
const ContextNavbar = () => {
    return(
        <div className="navContext">
            <ul className="text-white flex w-[35rem] justify-between">
                <li className="inline">
                    <a href="/" className="hover:underline hover:border-b-2 border-transparent border-b">About</a>
                </li>
                <li className="inline">
                    <a href="/" className="hover:underline hover:border-b-2 border-transparent border-b">Investments</a>
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
            </ul>
        </div>
    );
}

export default ContextNavbar;