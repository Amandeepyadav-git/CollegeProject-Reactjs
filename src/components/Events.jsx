export default function Schedule({ eventTime, eventName, eventHead, teamMembers }) {

  return (
    <div>
        <div className=" h-[500px] bg-[url('')] backdrop-blur-lg p-6 rounded-2xl shadow-lg w-[350px] text-white flex flex-col gap-4 border border-white/20">
      <h2 className="text-xl font-semibold text-center mb-2">Event Details</h2>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-300">Event Scheduled Time:</label>
        <input
          type="time"
          value={eventTime}
          readOnly
          className="p-3 rounded-md bg-transparent border border-white/30 text-white focus:outline-none shadow-[inset_0_0_10px_white] transition-all duration-300"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-300">Event Name:</label>
        <input
          type="text"
          value={eventName}
          readOnly
          className="p-3 rounded-md bg-transparent border border-white/30 text-white focus:outline-none shadow-[inset_0_0_10px_white] transition-all duration-300"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-300">Event Head Name:</label>
        <input
          type="text"
          value={eventHead}
          readOnly
          className="p-3 rounded-md bg-transparent border border-white/30 text-white focus:outline-none shadow-[inset_0_0_10px_white] transition-all duration-300"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-300">Number of Team Members:</label>
        <input
          type="number"
          value={teamMembers}
          readOnly
          className="p-3 rounded-md bg-transparent border border-white/30 text-white focus:outline-none shadow-[inset_0_0_10px_white] transition-all duration-300"
        />
      </div>
    </div>
    </div>
  );
}
