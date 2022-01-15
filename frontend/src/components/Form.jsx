import React from "react";
import background from "../asset/back.jpg";
import {Link} from "react-router-dom";


function Form({cta, ctaMain, msg, btnMsg, linkBtn, signIn, handleSubmit, setUsername, setPassword}){
    return (
        <div className="flex h-screen bg-black justify-center items-center">
            <img src={background} className="absolute -z-1"  alt="background"/>
            <div className="flex justify-around bg-black h-96 py-10 px-4 w-11/12 max-w-3xl rounded-2xl relative" >
                <p className={`absolute top-5 right-10 font-bold  rounded-md ${signIn?'bg-metal px-2 py-1 text-white': 'text-gray'}`}>Sign In</p>
                <p className={`absolute top-5 left-10 font-bold  rounded-md ${signIn?'text-gray':'bg-metal px-2 py-1 text-white'}`}>Sign Up</p>
            <div className="flex flex-1 flex-col justify-center text-white pl-10 font-bold text-2xl">
                {cta.map(
                    (sentence) =><p className="break-words">{sentence}</p>
                )}
                <p className="text-yellow-300 text-5xl ">{ctaMain}</p>
            </div>
            <form className="relative flex flex-1 flex-col gap-6 justify-center items-center" onSubmit={handleSubmit}>
                <p>
                    <input className="bg-secgray p-2 placeholder:text-gray rounded-md placeholder:font-bold  hover:bg-gray hover:placeholder:text-metal transition-all duration-300" type="text" placeholder="Username" onChange={e => setUsername(e.target.value)}/>
                </p>
                <p>
                    <input className=" bg-secgray placeholder:text-gray p-2 rounded-md placeholder:font-bold hover:bg-gray hover:placeholder:text-metal transition-all duration-300" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                </p>

                <div className="flex gap-5 max-w-full">
                    <p>
                        <button className="px-7 py-1 font-bold rounded-xl bg-yellow-300 text-xl">GO</button>
                    </p>
                    <p className="text-white text-xs">
                        {msg.map(
                            (sentence) =><p className="break-words">{sentence}</p>
                        )}
                        <Link to={linkBtn} className="text-priyellow font-bold">{btnMsg}</Link>
                    </p>
                    <p>

                    </p>

                </div>
            </form>

            <p className="absolute bottom-2 right-10 font-bold text-white">
                about
            </p>
            </div>
        </div>
    )
}

export default Form;