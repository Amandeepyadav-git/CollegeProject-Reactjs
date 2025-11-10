import React from "react";

export default function PastEvents({ eventName, eventDate, review, imageUrl }) {
  return (
    <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-lg w-[320px] p-5 flex flex-col gap-3 transition-all duration-300 hover:scale-105 hover:bg-white/20">
      
      {/* Event Image */}
      <div className="w-full h-[180px] overflow-hidden rounded-xl">
        <img
          src={imageUrl}
          alt={eventName}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Event Info */}
      <div className="flex flex-col text-white">
        <h2 className="text-xl font-semibold">{eventName}</h2>
        <p className="text-sm text-gray-300">📅 {eventDate}</p>
      </div>

      {/* Review Section */}
      <div className="mt-2 text-gray-200 text-sm italic border-t border-white/20 pt-2">
        “{review}”
      </div>
    </div>
  );
}
