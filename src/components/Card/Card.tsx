import React, { useCallback } from 'react';
import './Card.css';

interface CardProps {
    title: string;
    description: string;
}

const Card = (
        { 
            title,
            description,
        }: CardProps
    ) => {

    const Click = useCallback(() => {
        console.log('Card rendered');
    }, []);
    
    return (
        <div 
            className="card"
            onClick={() => Click()}
        >
            <div className="card_title">
                {title}
            </div>
            <div className="card_description">
                {description}
            </div>
        </div>
    );
}

export default Card;