import React from 'react';
import backgroundImage from '../assets/heroImage.png'; // Adjust the path as needed
import colorPallets from './color';

function HeroSection() {
    return (
        <div className="relative bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})`, height: 'calc(100vh - 5rem)' }}>
            <div className="absolute inset-0 flex items-center justify-end pr-16">
                <div className="flex flex-col bg-opacity-80 p-6 rounded-lg shadow-lg w-1/2" style={{ backgroundColor: `${colorPallets.cardBackground}`, height: '430px' }}>
                    <div className='flex flex-col gap-2'>
                        <p className='text-lg font-semibold'>New Arrival</p>
                        <h1 className="text-6xl font-bold" style={{ color: `${colorPallets.cardTitle}` }}>Discover Our <br/> New Collection</h1>
                        <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                    </div>
                    <button className='p-4 w-1/4 mt-auto font-bold text-white' style={{ backgroundColor: `${colorPallets.cardTitle}` }}>Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
