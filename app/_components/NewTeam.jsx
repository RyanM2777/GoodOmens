"use client"
import React, { useState } from 'react';

const people = [
    {
        name: 'Lauren',
        role: '@LaurenMcneeTattoo',
        imageUrl: '/ProfileLauren.jpeg',
        bio: 'Lauren started off tattooing in 2017, and quickly found her niche. She loves tattooing a variety of styles, whether its bright fun cartoons or dark and creepy skulls. Realism, neo traditional and ornamental work is where she thrives, so book her up for any portraits, flowers, or anything fun and weird!',
        images: [
            '/Lauren/1.jpeg', '/Lauren/2.jpeg', '/Lauren/4.jpeg',
            '/Lauren/5.jpeg', '/Lauren/6.jpeg', '/Lauren/7.jpeg',
            '/Lauren/8.jpeg', '/Lauren/9.jpeg'
        ]
    },

    {
        name: 'Iain',
        role: '@tattoosbyhank1981',
        imageUrl: '/ProfileIain.jpg',
        bio: 'Iain began tattooing in 2005 and has since worked all over including, Denmark, Sweden, Spain, and the Cayman Islands. Due to this he is capable of covering all styles of work and designs. He prefers Japanese and dark horror work but anything else is happily taken on too.',
        images: [
            '/Iain/1.jpg', '/Iain/2.jpg', '/Iain/3.jpg',
            '/Iain/4.jpg', '/Iain/5.jpg', '/Iain/6.jpg',
            '/Iain/7.jpg', '/Iain/8.jpg', '/Iain/9.jpg'
        ]
    },
    {
        name: 'Steven',
        role: '@stevenblance',
        imageUrl: '/ProfileSteven.jpg',
        bio: 'Steven is a versatile and established artist with over a decade in the tattoo industry. With a previous history in fine art, Steven found his way into tattooing through portraiture and realism. Fueling his desire to learn, he\'s worked all over; from his home town of Dunfermline, to Glasgow, London and as far as California. Focusing on neo traditional, and with a background in realism and portraiture - Steven is equipped to take on any tattoo idea you might have',
        images: [
            '/Steven/1.jpg', '/Steven/2.jpg', '/Steven/4.jpg',
            '/Steven/5.jpg', '/Steven/6.jpg', '/Steven/7.jpg',
            '/Steven/8.jpg', '/Steven/9.jpg', '/Steven/10.jpg'
        ]
    },
    {
        name: 'Emily',
        role: '@hvntertattoos',
        imageUrl: '/ProfileEmily.jpeg',
        bio: 'Emily started learning to tattoo 7 years ago in Glasgow before taking time out to get a degree in Computer Arts, specialising in 3D environment art for video games. She\'s been been back tattooing for over a year now and mainly works in illustrative blackwork, but is happy to work with other styles. Emily loves to tattoo all things gothic, horror and spooky, but also anything video games or simpsons themed, or all of the above combined!',
        images: [
            '/Emily/1.jpeg', '/Emily/2.jpeg', '/Emily/4.jpeg',
            '/Emily/5.jpeg', '/Emily/6.jpeg', '/Emily/7.jpeg',
            '/Emily/8.jpeg', '/Emily/9.jpeg', '/Emily/10.jpeg'
        ]
    },
];

export default function NewTeam() {
    return (
        <div className="bg-tealGreen-200 py-24 sm:py-32">
            <div className="mx-auto max-w-8xl px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet the Artists</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Each expert brings their own artistic flair and attention to detail, ensuring that every piece is not only beautiful but also safely and expertly crafted.
                    </p>
                </div>
                <ul role="list" className="mt-12  gap-y-12  sm:gap-y-16">
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="flex items-center gap-x-6">
                                <div className="flex-none">
                                    <img className="h-64 w-64 rounded-full object-cover" src={person.imageUrl} alt="" />
                                </div>
                                <div className="flex-auto">
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                                    <p className="text-sm text-gray-700 mt-4">{person.bio}</p>
                                </div>
                            </div>
                            <NewArtistInfo person={person} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function NewArtistInfo({ person }) {
    const [showGallery, setShowGallery] = useState(false);
    const [enlargedImage, setEnlargedImage] = useState(null);

    const toggleGallery = () => {
        setShowGallery((prev) => !prev);
    };

    const toggleEnlargedImage = (src) => {
        setEnlargedImage(enlargedImage === src ? null : src);
    };

    return (
        <div className="bg-tealGreen-200">
            <style jsx>{`
                .overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background: rgba(0, 0, 0, 0.5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                }
                .enlarged {
                    max-width: calc(4.5rem * 16);
                    max-height: 90vh;
                    width: auto;
                    height: auto;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                }
                .gallery-image {
                    cursor: pointer;
                }
            `}</style>
            <div className="flex items-center gap-4 bg-tealGreen-200 mb-4 cursor-pointer" onClick={toggleGallery}>
                <div className="flex-none">
                    <span className="text-gray-700">{showGallery ? 'Hide Gallery' : 'Show Gallery'} &#8595;</span>
                </div>
            </div>
            {showGallery && (
                <div className="col-span-2">
                    <div className="grid grid-cols-1 gap-4 mt-3 bg-tealGreen-100 sm:grid-cols-2 md:grid-cols-4">
                        {person.images.map((image, index) => (
                            <div key={index}>
                                <img
                                    className={`object-cover object-center w-full h-80 max-w-full rounded-lg gallery-image ${enlargedImage === image ? 'enlarged' : ''}`}
                                    src={image}
                                    alt="gallery-photo"
                                    onClick={() => toggleEnlargedImage(image)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {enlargedImage && (
                <div className="overlay" onClick={() => setEnlargedImage(null)}>
                    <img className="enlarged" src={enlargedImage} alt="enlarged-photo" />
                </div>
            )}
        </div>
    );
}

