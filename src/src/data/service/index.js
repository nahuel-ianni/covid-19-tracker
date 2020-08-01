import { getCountries, getCountryPopulation, getLastUpdateDateTime, getSummary } from '../api';

import * as images from '../../images';
import { GetPercentage } from '../../utils';

const CardType = {
    NEUTRAL: 0,
    POSITIVE: 1,
    NEGATIVE: 2,
};

const GetDataByCountry = async (countryCode) => {
    if (!summary)
        summary = await getSummary();

    if (countryCode && !countryPopulation.find(country => country.alpha2Code === countryCode))
        countryPopulation.push(await getCountryPopulation(countryCode));

    const data = countryCode
        ? summary?.Countries?.find(country => country.CountryCode === countryCode)
        : summary?.Global;

    const population = countryCode
        ? countryPopulation?.find(country => country.alpha2Code === countryCode)?.population
        : null;

    return [
        {
            title: 'RECOVERED',
            total: data?.TotalRecovered,
            new: data?.NewRecovered,
            img: images.CardRecoveredSvg,
            type: CardType.POSITIVE,
            extras: [
                `${data?.NewRecovered.toLocaleString()} new registered cases`,
                `${GetPercentage(data?.TotalRecovered, data?.TotalConfirmed)}% of all cases recovered`,
                countryCode ? `${GetPercentage(data?.TotalRecovered, summary?.Global.TotalRecovered)}% of the global cases are local` : null,
                // population ? `${GetPercentage(data?.TotalRecovered, population)}% of the population recovered` : null,
            ],
        },
        {
            title: 'INFECTED',
            total: data?.TotalConfirmed,
            new: data?.NewConfirmed,
            img: images.CardInfectedSvg,
            type: CardType.NEUTRAL,
            extras: [
                `${data?.NewConfirmed.toLocaleString()} new registered cases`,
                `${GetPercentage(data?.TotalConfirmed - (data?.TotalRecovered + data?.TotalDeaths), data?.TotalConfirmed)}% of all cases are still active`,
                countryCode ? `${GetPercentage(data?.TotalConfirmed, summary?.Global.TotalConfirmed)}% of the global cases are local` : null,
                population ? `${GetPercentage(data?.TotalConfirmed, population)}% of the population contracted the virus` : null,
            ],
        },
        {
            title: 'DEATHS',
            total: data?.TotalDeaths,
            new: data?.NewDeaths,
            img: images.CardDeadSvg,
            type: CardType.NEGATIVE,
            extras: [
                `${data?.NewDeaths.toLocaleString()} new registered cases`,
                `${GetPercentage(data?.TotalDeaths, data?.TotalConfirmed)}% of all cases ended up in death`,
                countryCode ? `${GetPercentage(data?.TotalDeaths, summary?.Global.TotalDeaths)}% of the global cases are local` : null,
                // population ? `${GetPercentage(data?.TotalDeaths, population)}% of the population died infected` : null,
            ],
        },
    ]
};

const GetCountries = async () => {
    if (!countries) {
        countries = await getCountries();
        countries.sort((a, b) => a.Country.localeCompare(b.Country));
    }

    return countries;
};

const GetLastUpdateDateTime = async () => {
    if (!lastUpdate)
        lastUpdate = await getLastUpdateDateTime();

    return lastUpdate;
};

const GetRecommendedMeasures = () => [
    {
        title: 'Wash your hands frequently',
        content: 'Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.',
        img: images.HandSanitizerSvg,
        img_desc: 'Wash your hands frequently'
    },
    {
        title: 'Maintain social distance',
        content: 'Maintain at least 1 metre (3 feet) distance between yourself and others.',
        img: images.SocialDistancingSvg,
        img_desc: 'Maintain social distance'
    },
    {
        title: 'Stay clear of crowds',
        content: 'Avoid going to crowded places.',
        img: images.WarningMallSvg,
        img_desc: 'Stay clear of crowds'
    },
    {
        title: 'Avoid touching your face',
        content: 'Avoid touching eyes, nose and mouth.',
        img: images.ProtectedFaceSvg,
        img_desc: 'Avoid touching your face'
    },
    {
        title: 'Practice respiratory hygiene',
        content: 'Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately and wash your hands.',
        img: images.CoveredCoughSvg,
        img_desc: 'Practice respiratory hygiene'
    },
    {
        title: 'Behave consciously',
        content: 'Stay home and self-isolate even with minor symptoms such as cough, headache, mild fever, until you recover. Have someone bring you supplies. If you need to leave your house, wear a mask to avoid infecting others.',
        img: images.FaceMaskSvg,
        img_desc: 'Behave consciously'
    },
    {
        title: 'Seek medical care',
        content: 'If you have a fever, cough and difficulty breathing, seek medical attention, but call by telephone in advance if possible and follow the directions of your local health authority.',
        img: images.HelpPhoneSvg,
        img_desc: 'Seek medical care'
    },
    {
        title: 'Stay updated',
        content: 'Keep up to date on the latest information from trusted sources, such as WHO or your local and national health authorities.',
        img: images.NewspaperSvg,
        img_desc: 'Stay updated'
    },
];

let countries = null;
let countryPopulation = [];
let lastUpdate = null;
let summary = null;

export { CardType, GetDataByCountry, GetCountries, GetLastUpdateDateTime, GetRecommendedMeasures };