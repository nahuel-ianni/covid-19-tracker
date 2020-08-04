import React, { Fragment } from 'react';

const About = () => {
    return (
        <Fragment>
            <h2>About this data</h2>

            <h3>It changes rapidly</h3>
            <p>This data changes rapidly and might not reflect some cases still being reported.</p>

            <h3>It only includes people tested</h3>
            <p>Cases only include people who were tested and confirmed positive. Testing rules and availability vary by country. Some areas may not have data because they haven’t published their data or haven’t done so recently.</p>

            <h3>Why do I see different data from different sources?</h3>
            <p>There are various sources that are tracking and aggregating coronavirus data. They update at different times and may have different ways of gathering data.</p>
        </Fragment>
    );
}

export default About;