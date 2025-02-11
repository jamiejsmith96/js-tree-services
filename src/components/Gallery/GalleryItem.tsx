import React from 'react';
import { Button } from '@mantine/core';

interface GalleryItemProps {
    imageSrc: string;
    description: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ imageSrc, description }) => {
    return (
        <div className="gallery-item">
            <img src={imageSrc} alt={description} className="gallery-image" />
            <p className="gallery-description">{description}</p>
            <Button variant="outline">View Details</Button>
        </div>
    );
};

export default GalleryItem;