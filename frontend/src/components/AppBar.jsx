import React from 'react';
import Logout from "./Logout";


function AppBar(){

    return (
        <nav className="bg-black p-4 flex rounded-b-md  justify-center">
            <div className="flex max-h-screen-xl w-full justify-around">
                <Logout/>
                <p className="hidden md:flex text-white text-lg font-bold">

                    <span className="text-yellow-300">EASY</span> KANBAN</p>
                <p className=" text-yellow-300">Username</p>
            </div>
        </nav>

    )

}


export default AppBar;