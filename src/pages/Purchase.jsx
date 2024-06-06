import React from 'react';
import { faArrowLeft, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const Purchase = () => {
    return (
        <div className="bg-black text-white min-h-screen">
            <div className="bg-gray h-16 flex justify-between items-center px-4 py-2">
                <div className="flex items-center gap-5">
                    <Link to="/">
                        <FontAwesomeIcon icon={faArrowLeft} className="mr-2"/>
                    </Link>
                    <h1 className="text-lg font-semibold">Purchase Ticket</h1>
                </div>
                <Link to="/" className="uppercase text-sm">Cancel</Link>
            </div>
            <div>
                <p className="text-xs m-4 text-blue">Select Fare</p>
                <div className="bg-gray w-full p-3">
                    <AboutSection ticketType="All-Day" times="All-Day" price="$5.00" type={true} />
                    <AboutSection ticketType="Weekend All-Day / Saturday and Sunday" type={true} times="Weekend All-Day" price="$4.00" info="Valid Saturday and Sunday only. All-Day passes are valid until 2am after activation." />
                    <AboutSection ticketType="Rush Hour / M-F 6-9am and 3-6:30pm" type={false} times="Rush Hour" price="$2.50" />
                    <AboutSection ticketType="Non-Rush Hour" times="Non-Rush Hour" type={false} price="$2.00" />
                </div>
            </div>
        </div>
    );
};

function AboutSection(props) {
    return (
        <div>
            <Link to="/Ticket" state={{ ticketType: "Adult " + props.times, type: props.type }}>
                <div className="flex justify-between items-center border-b py-2 min-h-16">
                    <h2>{props.ticketType}</h2>
                    <div className="flex items-center">
                        <p className="text-xs mr-4">{props.price}</p>
                        <FontAwesomeIcon icon={faCircleInfo} className="text-xs bg-blue p-1 rounded-md px-2 text-gray"/>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Purchase;