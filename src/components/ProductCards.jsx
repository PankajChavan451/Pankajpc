import React from 'react';
import Syltherine from '../assets/Syltherine.png';
import RespiraImage from '../assets/respira-image.png';
import Lolito from "../assets/Lolito.png";
import Grifo from "../assets/Grifo.png";
import Leviosa from "../assets/Leviosa.png";
import Muggo from "../assets/Muggo.png";
import Pingky from "../assets/Pingky.png";
import Potty from "../assets/Potty.png";
import colorPallets from './color';

const products = [
    {
        name: "Syltherine",
        description: "Stylish cafe chair",
        price: "Rp 2.500.000",
        originalPrice: "Rp 3.500.000",
        discount: "30%",
        image: Syltherine,
        height: 280,
        width: 280
    },
    {
        name: "Leviosa",
        description: "Stylish cafe chair",
        price: "Rp 2.500.000",
        hoverOptions: ["Add to cart", "Share", "Compare", "Like"],
        image: Leviosa
    },
    {
        name: "Lolito",
        description: "Luxury big sofa",
        price: "Rp 7.000.000",
        originalPrice: "Rp 14.000.000",
        discount: "50%",
        image: Lolito
    },
    {
        name: "Respira",
        description: "Outdoor bar table and stool",
        price: "Rp 500.000",
        new: true,
        image: RespiraImage
    },
    {
        name: "Grifo",
        description: "Night lamp",
        price: "Rp 1.500.000",
        image: Grifo
    },
    {
        name: "Muggo",
        description: "Small mug",
        price: "Rp 150.000",
        new: true,
        image: Muggo
    },
    {
        name: "Pingky",
        description: "Cute bed set",
        price: "Rp 7.000.000",
        originalPrice: "Rp 14.000.000",
        discount: "50%",
        image: Pingky
    },
    {
        name: "Potty",
        description: "Minimalist flower pot",
        price: "Rp 500.000",
        new: true,
        image: Potty
    }
];

function ProductCards() {
    const height = 280;
    const width = 280;
    return (
        <div className="w-3/4 mx-auto gap-4 flex flex-col items-center">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold">Browse The Range</h2>
                <p className="mt-2 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product, index) => (
                    <div key={index} className="flex flex-col items-center justify-center group">
                        <div className="relative bg-center shadow-lg" style={{ backgroundImage: `url(${product.image})`, height: `${height}px`, width: `${width}px` }}>
                            {(product.new || product.discount) && (
                                <div className={`absolute right-0 mt-5 mr-5 ${product.new ? 'bg-green-400' : 'bg-red-500'} rounded-full text-sm p-2`}>
                                    {product.discount && <p>{product.discount}</p>}
                                    {product.new && <span>New</span>}
                                </div>
                            )}
                        </div>
                        <div className="relative z-10 p-4 text-black" style={{ backgroundColor: `#F4F5F7`, width: `${width}px` }}>
                            <h3 className="text-xl font-bold">{product.name}</h3>
                            <p>{product.description}</p>
                            <div className="flex flex-row w-full gap-1">
                                {product.originalPrice && (
                                    <p className="line-through">{product.originalPrice}</p>
                                )}
                                <p>{product.price}</p>
                            </div>
                            {product.hoverOptions && (
                                <div className="absolute bottom-4 inset-x-0 flex justify-around opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {product.hoverOptions.map((option, i) => (
                                        <button key={i} className="bg-white text-black px-2 py-1 rounded">{option}</button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <button className='p-4 bg-transparent border w-1/4' style={{border:`solid 2px ${colorPallets.cardBackground}`}}>
                Show More 
            </button>
        </div>
    );
}

export default ProductCards;
