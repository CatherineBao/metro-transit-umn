import './App.css';
import logo from './images/goto-logo.png';
import Header from './components/Header';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTicket} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className='min-h-screen flex flex-col justify-between'>
        <div className='min-h-full'>
          < Header/>
          <div className='p-3 flex-col'>
            <p class="text-blue mb-5"> 
              Activated Tickets 
            </p> 
            <div className='flex gap-3 text-white bg-black p-3 min-h-32 shadow-[0_0_30px_rgba(255,255,255,0.5)]'>
              <img className="h-1/6 w-1/6" src={logo} alt="go to logo" />
              <div className='bg-light-gray min-h-full w-full p-3'>
                <h1 className='font-semibold mb-10'>Adult Non-Rush Hour</h1>
                <div className='uppercase rounded-lg flex items-center gap-5 bg-blue w-full h-10 p-[0.1rem]'> 
                  <div className='font-bold text-xs rounded-l-lg bg-black w-2/3 min-h-full flex items-center justify-center gap-2'>
                    <h1> View This Ticket </h1>
                    <FontAwesomeIcon icon={faTicket} />
                  </div>
                  <p className='uppercase  font-bold text-black text-[0.5rem] text-center'>Time Left <br/> 2 Hours</p>
                </div>
              </div>
            </div>
          </div>
        <div>
        </div>
      </div>
      <div>
        <div className='bg-gray min-h-14 p-3'>
                <h1 className='bg-blue mx-3 py-1 uppercase font-semibold text-sm text-center min-h-6 rounded-sm'>Buy Tickets</h1>
        </div>
        <div className='bg-light-gray min-h-4'></div>
      </div>
    </div>
  );
}

export default App;
