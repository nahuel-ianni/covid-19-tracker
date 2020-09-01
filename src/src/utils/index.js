const getElapsedTime = (durationInMilliseconds) => {
    const portions = [];
    const msInHour = 1000 * 60 * 60;

    const hours = Math.trunc(durationInMilliseconds / msInHour);

    if (hours) {
        portions.push(`${hours} hours`);
    }
    else {
        const msInMinute = 1000 * 60;
        const minutes = Math.trunc(durationInMilliseconds / msInMinute);

        if (minutes)
            portions.push(`${minutes} minutes`);
    }

    return portions.join(' ');
}

const getPercentage = (number, total) => ((number / total) * 100).toFixed(2);

export { getElapsedTime, getPercentage };