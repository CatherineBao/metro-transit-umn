import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
      super(props);
      const date = new Date(); 
      this.state = {
        time: this.formatTime(date)
      };
    }
  
    formatTime(date) {
      let hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; 
      return hours + ':' + (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds + ' ' + ampm;
    }
  
    render() {
      return (
        <div className='bg-[#ffffff] font-[775] text-gray text-[4rem] text-center'> 
            {this.state.time} 
        </div>
      );
    }
  
    componentDidMount() {
      this.interval = setInterval(() => {
        const date = new Date(); 
        this.setState({
          time: this.formatTime(date)
        });
      }, 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  }
  
  export default Timer;