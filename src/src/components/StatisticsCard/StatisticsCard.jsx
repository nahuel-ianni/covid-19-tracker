import React, { useState } from 'react';
import clsx from 'clsx';

import styles from './StatisticsCard.module.css';
import { CardType } from '../../data/service';
import { GetPercentage } from '../../utils';

import { Avatar, Card, CardActions, CardContent, CardHeader, Collapse, Divider, IconButton, List, ListItem, Typography } from '@material-ui/core';
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
    const percentage = props.total && props.new ? GetPercentage(props.new, props.total - props.new) : 0;

    const getCardActions = () =>
        props.extras
            ? (
                <CardActions className={styles.container} disableSpacing>
                    <IconButton onClick={handleExpandClick} className={clsx(classes.expand, { [classes.expandOpen]: expanded, }, styles.actions)} aria-expanded={expanded} aria-label="show more">
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
            )
            : null;

    const getCollapseContent = () =>
        props.extras
            ? (
                <Collapse in={expanded} timeout="auto">
                    <List className={styles.ul}>
                        {props.extras.map((item, i) =>
                            <ListItem key={i}>
                                {i !== 0 && item ? <Divider className={styles.hr} /> : null}
                                <Typography variant="body2" align="center">{item}</Typography>
                            </ListItem>
                        )}
                    </List>
                </Collapse>
            )
            : null;

    return (
        <Card>
            <CardHeader title={props.title} titleTypographyProps={{ component: "h3", variant: "inherit", color: "textSecondary" }}
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

                <Typography variant="body2" className={styles.note}>{percentage}% increase in the past 24 hours</Typography>
            </CardContent>

            {getCardActions()}
            {getCollapseContent()}
        </Card>
    );
}

export default StatisticsCard;