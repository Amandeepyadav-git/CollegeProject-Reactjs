import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState(null);
  const [college, setCollege] = useState(null);
  const [eventName, setEventName] = useState(null);
  const [date, setDate] = useState(null);
  const [rollNo, setRollNo] = useState(null);
  const [email, setEmail] = useState(null);
  const [phNo, setPhNo] = useState(null);
  const [team, setTeam] = useState(false);
  const [memb, setMemb] = useState("");

  return (
    <div className="h-screen w-screen text-white flex flex-row bg-[url('https://images.unsplash.com/photo-1559060680-36abfac01944?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2274')] bg-cover bg-center">
      <div className="leftbox w-[50%] h-full flex flex-col justify-center items-center">
        <div className="h-[70%] w-[60%] backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.2)] p-6 flex flex-col gap-3 justify-center items-center">
          <h1 className="text-3xl font-semibold mb-3">Your Card</h1>

          <input
            type="text"
            value={name || ""}
            disabled
            placeholder="Name"
            className="p-3 w-full bg-transparent border border-white/30 rounded-md text-white shadow-[inset_0_0_10px_white] transition-all duration-300"
          />
          <input
            type="text"
            value={college || ""}
            disabled
            placeholder="College"
            className="p-3 w-full bg-transparent border border-white/30 rounded-md text-white shadow-[inset_0_0_10px_white] transition-all duration-300"
          />
          <input
            type="text"
            value={rollNo || ""}
            disabled
            placeholder="Roll No"
            className="p-3 w-full bg-transparent border border-white/30 rounded-md text-white shadow-[inset_0_0_10px_white] transition-all duration-300"
          />
          <input
            type="text"
            value={email || ""}
            disabled
            placeholder="Email"
            className="p-3 w-full bg-transparent border border-white/30 rounded-md text-white shadow-[inset_0_0_10px_white] transition-all duration-300"
          />
          <input
            type="text"
            value={phNo || ""}
            disabled
            placeholder="Phone"
            className="p-3 w-full bg-transparent border border-white/30 rounded-md text-white shadow-[inset_0_0_10px_white] transition-all duration-300"
          />
          <input
            type="text"
            value={eventName || ""}
            disabled
            placeholder="Event"
            className="p-3 w-full bg-transparent border border-white/30 rounded-md text-white shadow-[inset_0_0_10px_white] transition-all duration-300"
          />
          <input
            type="text"
            value={date || ""}
            disabled
            placeholder="Date"
            className="p-3 w-full bg-transparent border border-white/30 rounded-md text-white shadow-[inset_0_0_10px_white] transition-all duration-300"
          />
          {team && (
            <input
              type="text"
              value={`Team Members - ${memb}`}
              disabled
              className="p-3 w-full bg-transparent border border-white/30 rounded-md text-white shadow-[inset_0_0_10px_white] transition-all duration-300"
            />
          )}
        </div>
      </div>

      {/* Right box */}
      <div className="rightbox w-[50%] h-full flex flex-col justify-center items-center gap-5 backdrop-blur-lg bg-white/5 border-l border-white/20 p-8">
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="p-3 w-[70%] bg-transparent border border-white/30 rounded-md text-white focus:shadow-[inset_0_0_10px_white] transition-all duration-300"
        />
        <input
          type="text"
          onChange={(e) => setCollege(e.target.value)}
          placeholder="College Name"
          className="p-3 w-[70%] bg-transparent border border-white/30 rounded-md text-white focus:shadow-[inset_0_0_10px_white] transition-all duration-300"
        />
        <input
          type="text"
          onChange={(e) => setRollNo(e.target.value)}
          placeholder="Roll No or Student ID"
          className="p-3 w-[70%] bg-transparent border border-white/30 rounded-md text-white focus:shadow-[inset_0_0_10px_white] transition-all duration-300"
        />
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="p-3 w-[70%] bg-transparent border border-white/30 rounded-md text-white focus:shadow-[inset_0_0_10px_white] transition-all duration-300"
        />
        <input
          type="text"
          onChange={(e) => setPhNo(e.target.value)}
          placeholder="Phone Number"
          className="p-3 w-[70%] bg-transparent border border-white/30 rounded-md text-white focus:shadow-[inset_0_0_10px_white] transition-all duration-300"
        />
        <input
          type="text"
          onChange={(e) => setEventName(e.target.value)}
          placeholder="Event Name"
          className="p-3 w-[70%] bg-transparent border border-white/30 rounded-md text-white focus:shadow-[inset_0_0_10px_white] transition-all duration-300"
        />
        <input
          type="text"
          onChange={(e) => setDate(e.target.value)}
          placeholder="Date of Event (DD/MM/YYYY)"
          className="p-3 w-[70%] bg-transparent border border-white/30 rounded-md text-white focus:shadow-[inset_0_0_10px_white] transition-all duration-300"
        />

        <div className="flex flex-col items-center gap-2">
          <label className="text-sm text-gray-200">Teammate Available?</label>
          <select
            onChange={(e) => setTeam(e.target.value === "true")}
            className="p-2 bg-transparent border border-white/30 rounded-md text-white focus:shadow-[inset_0_0_10px_white] transition-all duration-300"
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>

        {team && (
          <input
            type="number"
            onChange={(e) => setMemb(e.target.value)}
            placeholder="No. of Team Members"
            className="p-3 w-[50%] bg-transparent border border-white/30 rounded-md text-white focus:shadow-[inset_0_0_10px_white] transition-all duration-300"
          />
        )}

        <button className="relative overflow-hidden h-[50px] w-[190px] rounded text-white bg-black transition-all duration-700 group mt-3">
          <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,red_0%,transparent_70%)] scale-0 group-hover:scale-150 transition-transform duration-500 ease-out"></span>
          <span onClick={()=>{
            setCollege("");
            setName("");
            setDate("");
            setEmail("");
            setEventName("");
            setMemb("");
            setPhNo("");
            setRollNo("");
            setTeam("");
          }} className="relative z-10">Register for Event</span>
        </button>
      </div>
    </div>
  );
};

export default Register;
