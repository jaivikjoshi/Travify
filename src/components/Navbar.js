import { Link } from "react-router-dom"
import { DateRange } from 'react-date-range';
import {useState} from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";
import '../index.css';


const Navbar = () => {

    const [openDate, setOpenDate] = useState(false)


    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    return (
        <div className='bg-black p-3 mt-10'>
            <header className='flex justify-between'>
                <a href="" className="flex items-center gap-2 ml-10">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="30" viewBox="0 0 640 512">
                        <path fill="#63E6BE" d="M381 114.9L186.1 41.8c-16.7-6.2-35.2-5.3-51.1 2.7L89.1 67.4C78 73 77.2 88.5 87.6 95.2l146.9 94.5L136 240 77.8 214.1c-8.7-3.9-18.8-3.7-27.3 .6L18.3 230.8c-9.3 4.7-11.8 16.8-5 24.7l73.1 85.3c6.1 7.1 15 11.2 24.3 11.2H248.4c5 0 9.9-1.2 14.3-3.4L535.6 212.2c46.5-23.3 82.5-63.3 100.8-112C645.9 75 627.2 48 600.2 48H542.8c-20.2 0-40.2 4.8-58.2 14L381 114.9zM0 480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32z" />
                    </svg>
                    <span className='font-bold text-xl text-white'>travify</span>
                </a>
                <div>
            <div className='flex gap-5 border border-white-300 rounded-full py-2 px-4 shadow-md shadow-white-800 text-white relative justify-center align-center'>
                    <div>Location</div>
                    <div className='border border-l border-white-300'></div>
                    <div><span onClick={()=> setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                        { openDate&&<DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date"
                        />}
                    </div>
                    <div className='border border-l border-white-300'></div>
                    <div># Of Guests</div>
                    <div className='border border-l border-white-300'></div>
                    <button className='bg-primary text-white p-1 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                </div>
            </div>
                <Link to = {'/login'} className='flex items-center gap-2 border border-white-300 rounded-full py-2 px-4 shadow-md shadow-white-800 text-white mr-10'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </div>
                </Link>
            </header>
            <div className="relative">
                <img src = './images/Account.png' className="absolute top-0 right-0 pr-5 w-130 h-80 z--80 mr-8"></img>
            </div>   

            
                
                
        </div>
    )
}

export default Navbar