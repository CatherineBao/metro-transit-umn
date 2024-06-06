import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faRotateRight, faTicket, faBus, faClock, faEnvelope, faGear, faPhone, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
    const [menu, setMenu] = useState(true);
    const nav = 'w-full bg-gray h-16 text-white flex items-center justify-starts p-5 gap-8';
    return (
        <div className='flex-col items-start w-full'>
            <AnimatePresence>
                {!menu ? (
                <motion.div
                    key="nav"
                    initial={{ opacity: 0, x: "-50%" }}
                    animate={{ opacity: 1, x: "0%" }}
                    exit={{ opacity: 0, x: "-50%", transition: { duration: "0.35" } }}
                    transition={{ stiffness: "100", duration: "0.35" }}
                    className='absolute z-10'
                >
                    <div className='w-screen flex min-h-screen'>
                        <div className='w-3/4 flex-col items-end bg-black'>
                            <div className='bg-white'>
                                <div className='w-full bg-gray h-16 shadow-md shadow-black'></div>
                                <hr/>
                                <div className={nav}>
                                    <FontAwesomeIcon icon={faTicket} />
                                    <h1>My Tickets</h1>
                                </div>
                                <hr className='w-1/4'/>
                                <div className={nav}>
                                    <FontAwesomeIcon icon={faBus} />
                                    <h1>Tools</h1>
                                </div>
                                <hr className='w-1/4'/>
                                <div className={nav}>
                                    <FontAwesomeIcon icon={faClock} />
                                    <h1>History</h1>
                                </div>
                                <hr className='w-1/4'/>
                                <div className={nav}>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <h1>Redeem Code</h1>
                                </div>
                                <hr className='w-1/4'/>
                                <div className={nav}>
                                    <FontAwesomeIcon icon={faGear} />
                                    <h1>Settings</h1>
                                </div>
                                <hr className='w-1/4'/>
                                <div className={nav}>
                                    <FontAwesomeIcon icon={faPhone} />
                                    <h1>Report a Problem</h1>
                                </div>
                                <hr className='w-1/4'/>
                                <div className={nav}>
                                    <FontAwesomeIcon icon={faCircleQuestion} />
                                    <h1>FAQ</h1>
                                </div>
                            </div>
                        </div>
                        <motion.div
                            key="nav"
                            initial={{ opacity: 0}}
                            animate={{ opacity: 1}}
                            exit={{ opacity: 0, transition: { duration: "0.35" } }}
                            transition={{ stiffness: "100", duration: "0.3" }}
                            className='w-1/4 bg-black/50 min-h-full'
                            onClick={() => setMenu((s) => !s)}
                        >
                        </motion.div>
                    </div>
                </motion.div>
                ) : null}
            </AnimatePresence>
            <div className='w-full bg-gray h-16 p-5 flex items-center text-white justify-between drop-shadow-md relative' >
                <div className='text-white font-semibold flex justify-start items-center gap-5 h-full'>
                    <FontAwesomeIcon 
                        icon={faBars}
                        onClick={() => setMenu((s) => !s)}
                    />
                    <p>
                        My Tickets
                    </p>
                </div>
                <FontAwesomeIcon icon={faRotateRight} />
            </div>
        </div>
    );
};

export default Header;