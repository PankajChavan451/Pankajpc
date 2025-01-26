import React from 'react';
import { RowsPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/rows.css';

// Dynamically import all images from the assets/gallery folder
function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../assets/gallery', false, /\.(png|jpe?g|svg)$/));

// Utility function to generate random dimensions
function getRandomDimensions() {
    const minWidth = 600;
    const maxWidth = 1000;
    const minHeight = 800;
    const maxHeight = 1200;

    const width = Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;
    const height = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;

    return { width, height };
}

const photos = images.map((image, index) => {
    const { width, height } = getRandomDimensions();
    return {
        src: image,
        width,
        height,
        srcSet: [
            { src: image, width: width / 2, height: height / 2 },
            { src: image, width: width / 4, height: height / 4 },
        ],
    };
});

export default function Gallery() {
    return (
        <div className="gallery-section py-4 mt-15 flex flex-col gap-10 mt-10">
            <div className='flex flex-col items-center'>
                <p className='text-lg text-gray-600 font-medium'>Share your setup with</p>
                <h1 className='text-4xl font-bold'>#FuniroFurniture</h1>
            </div>
            <div>
            <RowsPhotoAlbum
                photos={photos}
                sizes={{
                    size: '1168px',
                    sizes: [
                        {
                            viewport: '(max-width: 1200px)',
                            size: 'calc(100vw - 32px)',
                        },
                    ],
                }}
            />
            </div>
            </div>
    );
}
