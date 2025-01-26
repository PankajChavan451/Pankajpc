import React from 'react';

import diningImage from '../assets/dining.png'; // Adjust the path as needed
import livingRoomImage from '../assets/living.png'; // Adjust the path as needed
import bedroomImage from '../assets/bedroom.png'; // Adjust the path as needed

const cards = [
    {
        title: 'Dining',
        image: diningImage,
        width: 400,
        height: 500
    },
    {
        title: 'Living Room',
        image: livingRoomImage,
        width: 400,
        height: 500
    },
    {
        title: 'Bedroom',
        image: bedroomImage,
        width: 400,
        height: 500
    }
];

function BrowserCards() {
    return (
        <div className="px-6 flex flex-col gap-10 mt-10">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold">Browse The Range</h2>
                <p className="mt-2 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl">
                    {cards.map((card, index) => (
                        <div>
                        <div key={index} className="relative flex flex-col items-center justify-end bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: `url(${card.image})`, width: `${card.width}px`, height: `${card.height}px` }}>
                        </div>
                        <div className="relative z-10 p-4 text-center">
                        <h3 className="text-xl font-bold">{card.title}</h3>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BrowserCards;
