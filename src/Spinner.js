import './SeasonDisplay.css';

import React from 'react';

const seasonConfig = {
    summer: {
        text:'Let\'s hit the beach !',
        iconName: 'sun'
    },
    winter: {
        text:'Burr, it is chilly !',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    return month > 2 && month < 9 ?
        (lat > 0 ? 'summer' : 'winter') :
        (lat > 0 ? 'winter' : 'summer');
}

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {iconName, text} = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left ${iconName} massive icon`}/>
            <h1>{text}</h1>
            <i className={`icon-right ${iconName} massive icon`}/>
        </div>
    );
};

export default SeasonDisplay;