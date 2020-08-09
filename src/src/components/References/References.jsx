import React from 'react';

import { getElapsedTime } from '../../utils';

import { Link, Typography } from '@material-ui/core';

const References = ({ sources, lastUpdate }) => {
    const getLastUpdate = () => {
        if (!lastUpdate)
            return;

        const elapsedTime = getElapsedTime(Date.now() - new Date(lastUpdate).getTime());

        return `Updated less than ${elapsedTime} ago - `;
    };

    return (
        <Typography variant="caption" color="textSecondary">
            {getLastUpdate()}

            {sources?.length > 1 ? "Sources" : "Source"}:&nbsp;
            {sources?.filter(item => item?.length === 2).map((item, i) =>
                <Link key={i} href={item[1]} target="_blank" rel="noreferrer" color="inherit" underline="always">
                    {item[0]}
                </Link>
            )}
        </Typography>
    );
}

export default References;