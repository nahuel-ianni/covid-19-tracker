import React, { useState } from 'react';
import clsx from 'clsx';

import { Card, CardHeader, CardContent, CardActions, Collapse, Avatar, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: '#ff726f',
    },
}));

const StatisticsCard = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card>
            <CardHeader title="Title" subheader="Subtitle"
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        !
                    </Avatar>
                }
            />

            <CardContent>
                <Typography component="p" variant="body2" color="textSecondary">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent>

            <CardActions disableSpacing>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>

                <IconButton onClick={handleExpandClick}
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}                    
                    aria-expanded={expanded} aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto">
                <CardContent>
                    <Typography>Method:</Typography>
                    <Typography>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default StatisticsCard;