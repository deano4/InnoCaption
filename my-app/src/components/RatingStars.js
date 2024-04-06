import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar  } from '@fortawesome/free-solid-svg-icons';


const Rating = ({ rating }) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon icon={faStar} 
        style={{ 
            color: i <= rating ? 'F2A742' : 'lightgray',
            stroke: "black",
            strokeWidth: "20px"
            }}
           />
      );
    }
  
    return <div>{stars}</div>;
  };
  

export default Rating;
