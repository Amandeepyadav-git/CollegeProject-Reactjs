import React from "react";
import Box from "./Box";
import Participants from "./Participants";


const Main = (props) => {

   
  return (
    <div className="h-[70%] w-full p-5">
      <div className="flex justify-between h-[10%] p-5">
        <h2 className="text-blue-700 text-4xl font-bold">
          College Event management System
        </h2>
        <button onClick={()=>{router.push("/Loginpage.jsx")}} className="bg-blue-700 rounded text-white p-0.5">
          Login/Register
        </button>
      </div>
      <div className="flex flex-col h-[20%] justify-center items-center p-5 gap-2.5">
        <h1 className="text-4xl font-bold">
          Simplify College Event management
        </h1>
        <p className="tracking-wider">
          Register,schedule,and get real-time updates for all campus events -
          all in one place
        </p>
      </div>
      <div className="h-[40%] flex justify-around flex-row w-screen">
        <Box
          heading="Event Registration"
          name="Register Now"
          text="Browse upcoming college events and easily register online"
        />
        <Box
          heading="Scheduling"
          text="View event schedules, session timings, and venues seamlessly"
          name="View Schedule"
        />
        <Box
          heading="Real-time Updates"
          text="Get instant notifications about changes or announcements"
          name="Enable Alerts"
        />
      </div>
      <div className="h-[30%] w-full flex flex-col bg-white">
        <div className="h-[30%] w-full flex items-end p-5">
          <h2 className="font-bold">Top participants</h2>
        </div>
        <div className="gap-[4%] h-[70%] flex justify-around flex-row p-5">
          <Participants NAME="Arvind Kejriwal" about="Participated in 5+ events"/>
          <Participants NAME="Anmol Azad" about="Participated in 5+ events"/>
          <Participants NAME="Arvind Rai" about="Participated in 5+ events"/>
        </div>
      </div>
    </div>
  );
};

export default Main;
