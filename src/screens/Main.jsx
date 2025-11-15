import Box from "../components/Box";
import Participants from "../components/Participants";
import { Link } from "react-router-dom";

const Main = (props) => {
  return (
    <div className="min-h-screen w-full bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center flex flex-col items-center justify-start p-5">
      
      <div className="flex justify-between items-center w-[90%] backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-5 shadow-lg mt-5">
        <h2 className="text-white text-3xl md:text-4xl font-bold drop-shadow">
          College Event Management System
        </h2>
        <Link to="/login">
          <button className="bg-blue-700 hover:bg-blue-800 transition-all duration-300 cursor-pointer rounded-lg text-white px-4 py-2 shadow-md">
            Login / Register
          </button>
        </Link>
      </div>

      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-lg w-[90%] mt-10 text-center p-8 flex flex-col items-center gap-3">
        <h1 className="text-4xl font-bold text-white">
          Simplify College Event Management
        </h1>
        <p className="tracking-wider text-gray-200">
          Register, schedule, and get real-time updates for all campus events — all in one place.
        </p>
      </div>

      <div className="flex flex-wrap justify-around gap-8 mt-10 w-[90%]">
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-5 shadow-lg transition-all duration-300 hover:scale-105">
          <Box
            heading="Event Registration"
            name="Register Now"
            add="/register"
            text="Browse upcoming college events and easily register online"
          />
        </div>

        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-5 shadow-lg transition-all duration-300 hover:scale-105">
          <Box
            heading="Scheduling"
            text="View event schedules, session timings, and venues seamlessly"
            add="/schedule"
            name="View Schedule"
          />
        </div>

        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-5 shadow-lg transition-all duration-300 hover:scale-105">
          <Box
            heading="Real-time Updates"
            text="Get instant notifications about changes or announcements"
            add="/notify"
            name="Enable Alerts"
          />
        </div>
      </div>

      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-lg w-[90%] mt-10 mb-10 p-5">
        <div className="flex items-end p-5">
          <h2 className="font-bold text-xl text-white">Top Participants</h2>
        </div>
        <div className="gap-[4%] flex flex-wrap justify-around p-5">
          <Participants NAME="Narendra Modi" about="Participated in 5+ events" />
          <Participants NAME="Rahul gandhi" about="Participated in 5+ events" />
          <Participants NAME="Pt. jawaharlal Nehru" about="Participated in 5+ events" />
        </div>
      </div>
        <div className='static bottom-0 flex justify-center h-[10%] w-full p-5'>
        2025 College Event Portal | Designed with 💙 for Students
    </div>
    </div>
  );
};

export default Main;
