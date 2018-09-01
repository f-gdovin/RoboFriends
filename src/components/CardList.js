import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div>
            {robots.map((robot, index) => (
                <Card
                    key={`robotId${index}`}
                    id={robot.id}
                    name={robot.name}
                    email={robot.email}
                />)
            )}
        </div>
    )
};

export default CardList;