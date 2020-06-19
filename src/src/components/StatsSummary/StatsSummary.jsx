import React from 'react';

const StatsSummary = ({ data: { NewConfirmed, NewDeaths, NewRecovered, TotalConfirmed, TotalDeaths, TotalRecovered } }) => {
    return (
        <div>
            <p>{NewConfirmed}</p>
            <p>{NewDeaths}</p>
            <p>{NewRecovered}</p>
            <p>{TotalConfirmed}</p>
            <p>{TotalDeaths}</p>
            <p>{TotalRecovered}</p>
        </div>
    )
}

export default StatsSummary;