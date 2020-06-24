import React, { useState } from 'react';
import clsx from 'clsx';

import styles from './StatisticsCard.module.css';
import { CardType } from '../../data/service';

import { Card, CardHeader, CardContent, CardActions, Collapse, Avatar, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CountUp from 'react-countup';

const useStyles = makeStyles((theme) => ({
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: { transform: 'rotate(180deg)', },
}));

const getCaseClass = (cardType) => {
    let value;

    switch (cardType) {
        case CardType.POSITIVE:
            value = styles.recovered;
            break;

        case CardType.NEGATIVE:
            value = styles.dead;
            break;

        default:
        case CardType.NEUTRAL:
            value = styles.infected;
            break;
    }

    return value;
}

const StatisticsCard = (props) => {
    const [expanded, setExpanded] = useState(false);
    const classes = useStyles();
    const handleExpandClick = () => { setExpanded(!expanded); };

    return (
        <Card>
            <CardHeader title={props.title} titleTypographyProps={{ variant: "subtitle" }}
                // avatar={
                //     <Avatar src={props.img} variant="square" aria-label="recipe" />
                // }
                className={styles.container} />

            <CardContent className={styles.cases}>
                <CountUp start={props.total / 2} end={props.total} duration={1.5} separator="," className={getCaseClass(props.type)} />
            </CardContent>

            <CardActions disableSpacing>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>

                <IconButton onClick={handleExpandClick}
                    className={clsx(classes.expand, { [classes.expandOpen]: expanded, })}
                    aria-expanded={expanded} aria-label="show more">
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