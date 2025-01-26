import React, { useState } from 'react';
import Room1 from '../assets/room1.png';
import Room2 from '../assets/room2.png';
import Room3 from '../assets/room3.png';
import { GrLinkNext } from "react-icons/gr";

const images = [
    { url: Room1, title: '01 — Bed Room', subtitle: 'Inner Peace' },
    { url: Room2, title: '02 — Dining Room', subtitle: 'Bright and Airy' },
    { url: Room3, title: '03 — Living Room', subtitle: 'Cozy Comfort' },
];

function InternalDesignSlideShow() {
    const [currentImage, setCurrentImage] = useState(0);

    const changeImage = (index) => {
        setCurrentImage(index);
    }

    const height = 400;
    const width = 500;
    return (
        <div className="flex flex-col items-center justify-between mt-10" style={{backgroundColor : `${'#FCF8F3'}`}}>
            <div className="flex py-8 gap-8">
                <div className="text-section flex flex-col items-center justify-center max-w-lg">
                    <h1 className="text-4xl font-bold text-gray-800">50+ Beautiful room inspiration</h1>
                    <p className="mt-4 text-gray-600">Our designer already made a lot of beautiful prototype of rooms that inspire you</p>
                    <button className="mt-6 bg-yellow-600 text-white py-2 px-4 rounded">Explore More</button>
                </div>
                <div className="image-section flex flex-no-wrap flex-col relative" style={{ width: '1000px' }}>
                    <div className="flex gap-10" style={{ overflow: 'hidden', width: '100%' }}>
                        <div
                            className="room relative bg-cover bg-center z-10 transform scale-110 transition-transform duration-300"
                            style={{ backgroundImage: `url(${images[currentImage].url})`, height: `${height + 100}px`, width: `${width}px` }}
                        >
                            <div className="room-info absolute bottom-0 ml-10 mb-10 flex flex-row items-end">
                                <div className=' bg-white bg-opacity-75 p-6'>
                                <p className="text-sm text-gray-600">{images[currentImage].title}</p>
                                <h2 className="text-lg font-bold text-gray-800">{images[currentImage].subtitle}</h2>
                                </div>
                                <div className='p-4' style={{backgroundColor : `${'#B88E2F'}`}}>
                                    <GrLinkNext className='text-white text-md'/>
                                </div>
                            </div>
                           

                        </div>
                        {images.map((image, index) => (
                            index !== currentImage && (
                                <div
                                    key={index}
                                    className="room relative bg-cover bg-center transition-transform duration-300"
                                    style={{ backgroundImage: `url(${image.url})`, height: `${height}px`, width: `${width}px` }}
                                    onClick={() => changeImage(index)}
                                >
                                </div>
                            )
                        ))}
                    </div>
                    <div className="navigation flex justify-center mt-6">
                        {images.map((_, index) => (
                            <button key={index} className={`w-3 h-3 mx-1 rounded-full ${index === currentImage ? 'bg-yellow-600' : 'bg-gray-300'}`} onClick={() => changeImage(index)}></button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InternalDesignSlideShow;
