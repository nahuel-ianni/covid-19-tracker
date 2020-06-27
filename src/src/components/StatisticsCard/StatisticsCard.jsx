import React, { useState } from 'react';
import clsx from 'clsx';

import styles from './StatisticsCard.module.css';
import { CardType } from '../../data/service';

import { Card, CardHeader, CardContent, CardActions, Collapse, Avatar, IconButton, List, ListItem, Typography } from '@material-ui/core';
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
        margin: 'auto',
    },
    expandOpen: { transform: 'rotate(180deg)', },
}));

const getCaseClass = (cardType) => {
    switch (cardType) {
        case CardType.POSITIVE:
            return styles.recovered;

        case CardType.NEGATIVE:
            return styles.dead;

        default:
        case CardType.NEUTRAL:
            return styles.infected;
    }
}

const StatisticsCard = (props) => {
    const [expanded, setExpanded] = useState(false);
    const classes = useStyles();
    const handleExpandClick = () => { setExpanded(!expanded); };

    const totalCases = props.total && props.total > 0 ? props.total : 0;
    const percentage = props.total && props.new ? (props.new / props.total) * 100 : 0;

    return (
        <Card>
            <CardHeader title={props.title} titleTypographyProps={{ component: "h3", variant: "subtitle1", color: "textSecondary" }}
                // subheader="Global"
                className={styles.header}
                avatar={<Avatar src={props.img} alt="Card icon" variant="square" aria-label="statistic" />}
                action={
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                } />

            <CardContent className={styles.cases}>
                <CountUp start={totalCases / 2} end={totalCases} duration={1.5} separator="," className={getCaseClass(props.type)} />

                <Typography variant="body2" className={styles.note}>
                    {percentage.toFixed(2)}% increase in the past 24 hours
                </Typography>
            </CardContent>

            <CardActions className={styles.container} disableSpacing>
                <IconButton onClick={handleExpandClick} className={clsx(classes.expand, { [classes.expandOpen]: expanded, }, styles.actions)} aria-expanded={expanded} aria-label="show more">
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto">
                <CardContent>
                    <List>
                        <ListItem>{props.new} NEW CASES</ListItem>
                        <ListItem>AVG PER DAY</ListItem>
                        <ListItem>PERcentage recovered in total</ListItem>
                    </List>
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default StatisticsCard;