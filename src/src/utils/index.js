export const getElapsedTime = (durationInMilliseconds) => {
    const portions = [];
    const msInHour = 1000 * 60 * 60;

    const hours = Math.trunc(durationInMilliseconds / msInHour);

    if (hours) {
        portions.push(`${hours} hours`);
        // durationInMilliseconds = durationInMilliseconds - (hours * msInHour);
    }
    else {
        const msInMinute = 1000 * 60;
        const minutes = Math.trunc(durationInMilliseconds / msInMinute);

        if (minutes) {
            portions.push(`${minutes} minutes`);
            // durationInMilliseconds = durationInMilliseconds - (minutes * msInMinute);
        }
    }

    return portions.join(' ');
}