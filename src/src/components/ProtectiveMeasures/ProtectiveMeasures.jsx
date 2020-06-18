import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import washHandsImage from '../../images/wash-hands.svg';
import socialDistancingImage from '../../images/social-distancing.svg';
import crowdedSpaceImage from '../../images/news.svg';
import touchFaceImage from '../../images/doctor.svg';
import respiratoryHygieneImage from '../../images/flu-mask.svg';
import stayHomeImage from '../../images/news.svg';
import hospitalImage from '../../images/hospital.svg';
import newsImage from '../../images/news.svg';

import styles from './ProtectiveMeasures.module.css';

const ProtectiveMeasures = () => {
    return (
        <section>
            <h2>Protective measures</h2>

            <Card>
                <CardContent>
                    <ul className={styles.ul}>
                        <li>
                            <img src={washHandsImage} className={styles.img} alt="Wash your hands frequently" />
                            <div>
                                <h3>Wash your hands frequently</h3>
                                <p>Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.</p>
                            </div>
                        </li>
                        <li>
                            <img src={socialDistancingImage} className={styles.img} alt="Maintain social distancing" />

                            <div>
                                <h3>Maintain social distancing</h3>
                                <p>Maintain at least 1 metre (3 feet) distance between yourself and others.</p>
                            </div>
                        </li>
                        <li>
                            <img src={crowdedSpaceImage} className={styles.img} alt="Avoid crowded spaces" />
                            <div>
                                <h3>Avoid crowded spaces</h3>
                                <p> Avoid going to crowded places.</p>
                            </div>
                        </li>
                        <li>
                            <img src={touchFaceImage} className={styles.img} alt="Avoid touching your face" />
                            <div>
                                <h3>Avoid touching your face</h3>
                                <p>Avoid touching eyes, nose and mouth.</p>
                            </div>
                        </li>
                        <li>
                            <img src={respiratoryHygieneImage} className={styles.img} alt="Practice respiratory hygiene" />
                            <div>
                                <h3>Practice respiratory hygiene</h3>
                                <p>Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately and wash your hands.</p>
                            </div>
                        </li>
                        <li>
                            <img src={stayHomeImage} className={styles.img} alt="Behave consciously" />
                            <div>
                                <h3>Behave consciously</h3>
                                <p> Stay home and self-isolate even with minor symptoms such as cough, headache, mild fever, until you recover. Have someone bring you supplies. If you need to leave your house, wear a mask to avoid infecting others.</p>
                            </div>
                        </li>
                        <li>
                            <img src={hospitalImage} className={styles.img} alt="Seek early medical care" />
                            <div>
                                <h3>Seek early medical care</h3>
                                <p>If you have a fever, cough and difficulty breathing, seek medical attention, but call by telephone in advance if possible and follow the directions of your local health authority.</p>
                            </div>
                        </li>
                        <li>
                            <img src={newsImage} className={styles.img} alt="Stay updated" />
                            <div>
                                <h3>Stay updated</h3>
                                <p>Keep up to date on the latest information from trusted sources, such as WHO or your local and national health authorities.</p>
                            </div>
                        </li>
                    </ul>
                </CardContent>
            </Card>

            <a className={styles.a} href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" target="_blank" rel="noopener noreferrer">Source: World Health Organization</a>
        </section>
    )
}

export default ProtectiveMeasures;