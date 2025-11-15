import React from 'react'
import PastEvents from '../components/PastEvents'

const Notify = () => {
  return (
    <div className='flex justify-around w-screen h-screen flex-row overflow-scroll gap-5 p-5 flex-wrap'>
        <PastEvents 
    eventName = "InnovateX Tech Conference"
    eventDate = "15 February 2024"
    review = "A fantastic event showcasing emerging technologies and inspiring ideas!"
    imageUrl = "https://images.unsplash.com/photo-1551836022-4c4c79ecde51"/>
    <PastEvents 
    eventName = "Cultural Carnival Night"
    eventDate = "28 March 2024"
    review = "Vibrant performances, colorful decorations, and an unforgettable night!"
    imageUrl = "https://images.unsplash.com/photo-1700152685840-7e117dee73df?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    <PastEvents 
    eventName = "Hackverse 3.0"
    eventDate = "20 May 2024"
    review = "An intense 48-hour hackathon full of creativity and collaboration."
    imageUrl = "https://images.unsplash.com/photo-1556761175-5973dc0f32e7"/>
    <PastEvents 
    eventName = "AI & Robotics Workshop"
    eventDate = "10 July 2024"
    review = "An insightful workshop that bridged theory with hands-on robotics practice."
    imageUrl = "https://plus.unsplash.com/premium_photo-1716396589180-0a7050c21098?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    <PastEvents 
    eventName = "Entrepreneurship Expo"
    eventDate = "5 September 2024"
    review = "Great platform for startups to pitch their ideas and connect with investors."
    imageUrl = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"/>
    </div>
  )
}

export default Notify