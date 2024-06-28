import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from 'react-router-dom'; 
import Timer from '../components/Timer';
import Expiration from "../components/Expiration";
import logo from '../images/goto-logo-blue.png';

const Ticket = () => {
    const location = useLocation();
    const { ticketType } = location.state || { ticketType: "Something is very broken" };
    
    return (
        <div className="bg-[#ffffff]">
            <div className=' w-full bg-gray h-16 p-5 flex items-center text-white justify-end drop-shadow-md relative' >
                <Link to="/">
                    <h1>X</h1>
                </Link>
            </div>
            <div className="text-gray p-5">
                <h1 className="font-bold text-xl">Metro Transit</h1>
                <p className="font-semibold text-sm">Show operator your ticket</p>
                <div className="mt-12 flex justify-center items-center w-full h-44 relative">
                    <div className="w-24 min-h-24 p-5 rounded-full z-30 absolute bg-white">
                        <img className="w-full" src={logo} alt="go to logo" />
                    </div>
                    <motion.div
                        className="w-36 min-h-36 rounded-full z-20 bg-gray-blue absolute"
                        animate={{
                            scale: [0, 0.5, 0.8, 0.75, 0.8, 0.75, 0.5, 0, 0.8, 0],
                            borderRadius: [100],
                        }}
                        transition={{
                            duration: 5,
                            ease: "easeInOut",
                            // times: [0, 0.2, 0.5, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 1
                        }}
                    >
                    </motion.div>                    <motion.div
                        className="w-36 min-h-36 rounded-full z-10 bg-light-blue absolute"
                        animate={{
                            scale: [1, 0.75, 1, 1.15, 0.75, 1.25, 1.15, 1.25, 1],
                            borderRadius: [100],
                        }}
                        transition={{
                            duration: 5,
                            ease: "easeInOut",
                            // times: [0, 0.2, 0.5, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 1
                        }}
                    >
                    </motion.div>
                </div>
            </div>
            <Timer/>
            <div className="p-5 shadow-md mx-2">
            <h1 className="text-[1.65rem] leading-tight mb-1">{ticketType}</h1>
                <p className="text-xs text-light-gray mb-8">Minneapolis/ St. Paul Metro Area</p>
                <Expiration/>
            </div>
        </div>
    );
};

export default Ticket;