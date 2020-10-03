const getElapsedTime = (durationInMilliseconds) => {
    const portions = [];
    const msInHour = 1000 * 60 * 60;

    const hours = Math.trunc(durationInMilliseconds / msInHour);

    if (hours) {
        portions.push(hours > 1 ? `${hours} hours` : `${hours} hour`);
    }
    else {
        const msInMinutes = 1000 * 60;
        const minutes = Math.trunc(durationInMilliseconds / msInMinutes);

        if (minutes)
            portions.push(minutes > 1 ? `${minutes} minutes` : `${minutes} minute`);
    }

    return portions.join(' ');
}

const getPercentage = (number, total) => ((number / total) * 100).toFixed(2);

export { getElapsedTime, getPercentage };