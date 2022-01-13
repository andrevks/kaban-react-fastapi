import React from 'react';
import Logout from "./Logout";


function AppBar(){

    return (
        <nav className="bg-white p-4 flex rounded-b-md  justify-center">
            <div className="flex max-h-screen-xl w-full justify-around">
                <Logout/>
                <p className="hidden md:flex">KABAN EASY</p>
                <p>USERNAME</p>
            </div>
        </nav>

    )

}


export default AppBar;