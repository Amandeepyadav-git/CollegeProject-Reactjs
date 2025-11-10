import React from 'react'
import Events from './Events'

const Schedule = () => {
  return (
<div className="bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670')] h-screen p-5 gap-5 w-screen flex overflow-scroll flex-wrap">
     <Events 
    eventTime= "10:30"
    eventName= "Tech Innovators Summit"
    eventHead= "Riya Sharma"
    teamMembers= "5"
  />
     <Events
    eventTime = "12:00"
    eventName = "CodeQuest Hackathon"
    eventHead = "Amandeep Yadav"
    teamMembers = "4"/>
     <Events 
    eventTime = "14:15"
    eventName = "AI & Robotics Workshop"
    eventHead = "Karan Mehta"
    teamMembers = "3"/>
     <Events 
    eventTime = "16:00"
    eventName = "UI/UX Design Challenge"
    eventHead = "Sneha Patel"
    teamMembers = "2"/>
     <Events
     eventTime = "18:30"
    eventName = "Startup Pitch Night"
    eventHead = "Arjun Singh"
    teamMembers = "6"/>
     
   </div>
  )
}

export default Schedule