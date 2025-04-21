import React from 'react';
import './GridContainer.css';

interface GridContainerProps {
    children: React.ReactNode;
}

const GridContainer: React.FC<GridContainerProps> = ({ children }) => {
    return (
        <div className="grid-container">
            {children}
        </div>
    );
}

export default GridContainer;