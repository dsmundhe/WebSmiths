import React, { useState } from 'react';
import '../styles/Gallery.css';

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(1); // Start with the second image as the center one

    const galleryItems = [
        { src: 'https://i.pinimg.com/564x/6e/47/5d/6e475d0be252fbc36a63ec21d56b42dc.jpg', alt: 'Image 1', description: 'Description 1' },
        { src: 'https://i.pinimg.com/736x/71/88/9c/71889c33f1981cc174a389170cb979d3.jpg', alt: 'Image 2', description: 'Description 2' },
        { src: 'https://i.pinimg.com/564x/49/9d/e9/499de9f5479cb76a9cecb98a83d85710.jpg', alt: 'Image 3', description: 'Description 3' },
        { src: 'https://i.pinimg.com/564x/b2/ba/18/b2ba18930e81c913c157c2d5fc52af80.jpg', alt: 'Image 4', description: 'Description 4' },
        { src: 'https://i.pinimg.com/564x/f7/cb/49/f7cb49a9f9025e2f9d45d179d107499d.jpg', alt: 'Image 5', description: 'Description 5' }
    ];

    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex < galleryItems.length - 1 ? prevIndex + 1 : 0));
    };

    const handlePrev = () => {
        setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : galleryItems.length - 1));
    };

    return (
        <div className="gallery">
            <div className="gallery-header">
                <h1>Gallery</h1>
            </div>
            <div className="gallery-wrapper">
                <button className="nav-btn left-btn" onClick={handlePrev}>&#10094;</button>
                <div className="gallery-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {galleryItems.map((item, index) => (
                        <div
                            key={index}
                            className="gallery-item"
                        >
                            <img src={item.src} alt={item.alt} />
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
                <button className="nav-btn right-btn" onClick={handleNext}>&#10095;</button>
            </div>
        </div>
    );
};

export default Gallery;
