import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const ZoomInExample = () => {
    const images = [
        {
            src: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
            alt: "A beautiful sunset over the mountains"
        },
        {
            src: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
            alt: "A serene lake surrounded by trees"
        },
        {
            src: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
            alt: "A vibrant city skyline at night"
        },
    ];

    return (
        <Zoom scale={1.4} indicators={true}>
            {images.map((image, index) => (
                <div key={index} style={{ width: "100%" }}>
                    <img 
                        style={{ objectFit: "cover", width: "100%" }} 
                        alt={image.alt} // Using descriptive alt text
                        src={image.src} 
                    />
                </div>
            ))}
        </Zoom>
    );
};

export default ZoomInExample;
