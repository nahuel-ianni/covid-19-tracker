import { getSummary } from '../api';

import { CardDeadSvg, CardInfectedSvg, CardRecoveredSvg } from '../../images';

export const CardType = {
    NEUTRAL: 0,
    POSITIVE: 1,
    NEGATIVE: 2,
};

export const GetCardValues = async () => {
    const data = await getSummary();
    return [
        {
            title: 'RECOVERED',
            total: formatValue(data?.Global?.TotalRecovered),
            new: formatValue(data?.Global?.NewRecovered),
            img: CardRecoveredSvg,
            type: CardType.POSITIVE,
        },
        {
            title: 'CONFIRMED CASES',
            total: formatValue(data?.Global?.TotalConfirmed),
            new: formatValue(data?.Global?.NewConfirmed),
            img: CardInfectedSvg,
            type: CardType.NEUTRAL,
        },
        {
            title: 'DEATHS',
            total: formatValue(data?.Global?.TotalDeaths),
            new: formatValue(data?.Global?.NewDeaths),
            img: CardDeadSvg,
            type: CardType.NEGATIVE,
        },
    ]
};

const formatValue = (value) => value ? value : '-';