import React, { Component } from 'react';

class Expiration extends Component {
    constructor(props) {
        super(props);
        const date = new Date();
        this.state = {
            time: this.formatTime(date, props.type)
        };
    }

    formatTime(date, type) {
        if (type) {
            // If type is true, set expiration time to 2 AM the next day
            date.setHours(2, 0, 0, 0);
            date.setDate(date.getDate() + 1);
        } else {
            // If type is false, add 2 hours to the current time
            date.setHours(date.getHours() + 2);
        }
        const options = {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        };
        const formattedDate = "Expires " + date.toLocaleString('en-US', options);
        return formattedDate;
    }

    render() {
        return (
            <div className='bg-[#ffffff] font-[775] text-light-gray text-md'>
                {this.state.time}
            </div>
        );
    }
}

export default Expiration;