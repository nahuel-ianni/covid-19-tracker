import React from 'react';

import { CoveredCoughSvg, FaceMaskSvg, HandSanitizerSvg, HelpPhoneSvg, NewspaperSvg, ProtectedFaceSvg, SocialDistancingSvg, WarningMallSvg } from '../../images';
import styles from './ProtectiveMeasures.module.css';

import { Card, CardContent, Link, Typography } from '@material-ui/core';


const ProtectiveMeasures = () => {
    const measures = [
        [HandSanitizerSvg, 'Wash your hands frequently', 'Wash your hands frequently', 'Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.'],
        [SocialDistancingSvg, 'Maintain social distancing', 'Maintain social distancing', 'Maintain at least 1 metre (3 feet) distance between yourself and others.'],
        [WarningMallSvg, 'Avoid crowded spaces', 'Avoid crowded spaces', 'Avoid going to crowded places.'],
        [ProtectedFaceSvg, 'Avoid touching your face', 'Avoid touching your face', 'Avoid touching eyes, nose and mouth.'],
        [CoveredCoughSvg, 'Practice respiratory hygiene', 'Practice respiratory hygiene', 'Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately and wash your hands.'],
        [FaceMaskSvg, 'Behave consciously', 'Behave consciously', 'Stay home and self-isolate even with minor symptoms such as cough, headache, mild fever, until you recover. Have someone bring you supplies. If you need to leave your house, wear a mask to avoid infecting others.'],
        [HelpPhoneSvg, 'Seek early medical care', 'Seek early medical care', 'If you have a fever, cough and difficulty breathing, seek medical attention, but call by telephone in advance if possible and follow the directions of your local health authority.'],
        [NewspaperSvg, 'Stay updated', 'Stay updated', 'Keep up to date on the latest information from trusted sources, such as WHO or your local and national health authorities.'],
    ];

    const listItems = measures.map(([src, alt, title, desc], i) =>
        <li key={i}>
            <img src={src} className={styles.img} alt={alt} />
            <div>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </li>
    );

    return (
        <section>
            <Typography component="h2" variant="h4" gutterBottom>
                Basic protective measures
            </Typography>

            <Card>
                <CardContent>
                    <ul className={styles.ul}>
                        {listItems}
                    </ul>
                </CardContent>
            </Card>

            <Typography className="legend" color="textSecondary">
                <Link href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" target="_blank" rel="noopener noreferrer" color="inherit">
                    Source: World Health Organization
                </Link>
            </Typography>
        </section>
    )
}

export default ProtectiveMeasures;