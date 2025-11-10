import React from 'react'
import PastEvents from './PastEvents'

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
    imageUrl = "https://images.unsplash.com/photo-1515165562835-c3b8e3c6b8a5"/>
    <PastEvents 
    eventName = "Hackverse 3.0"
    eventDate = "20 May 2024"
    review = "An intense 48-hour hackathon full of creativity and collaboration."
    imageUrl = "https://images.unsplash.com/photo-1556761175-5973dc0f32e7"/>
    <PastEvents 
    eventName = "AI & Robotics Workshop"
    eventDate = "10 July 2024"
    review = "An insightful workshop that bridged theory with hands-on robotics practice."
    imageUrl = "https://images.unsplash.com/photo-1581091870632-1b59cbb1c7d1"/>
    <PastEvents 
    eventName = "Entrepreneurship Expo"
    eventDate = "5 September 2024"
    review = "Great platform for startups to pitch their ideas and connect with investors."
    imageUrl = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"/>
    <PastEvents/>
    </div>
  )
}

export default Notify