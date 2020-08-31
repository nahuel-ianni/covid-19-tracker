import { getCountries, getHistory, getSummary } from '../api';
import { WorldIcon } from '../../images';

const GetCountries = async () => {
    if (!countries) {
        countries = await getCountries();
        countries = countries.map(country => ({
            name: country.name,
            code: country.alpha2Code,
            population: country.population,
            latlng: country.latlng,
            flagUrl: country.flag
        }));

        countries.sort((a, b) => a.name.localeCompare(b.name));
        countries.unshift({
            name: 'Worldwide',
            code: '',
            population: 0,
            flagUrl: WorldIcon
        });
    }

    return countries;
};

const GetDataByCountry = async (countryCode) => {
    if (!summary)
        summary = await getSummary();

    const data = countryCode
        ? summary?.Countries?.find(country => country.CountryCode === countryCode)
        : summary?.Global;

    return {
        lastUpdate: summary?.Date,
        sources: [
            ['Johns Hopkins CSSE', 'https://covid19api.com/'],
        ],
        data: [
            {
                title: 'Recovered',
                total: data?.TotalRecovered ?? 0,
            },
            {
                title: 'Confirmed',
                total: data?.TotalConfirmed ?? 0,
            },
            {
                title: 'Deaths',
                total: data?.TotalDeaths ?? 0,
            },
        ]
    }
};

const GetHistoryByCountry = async (countryCode) => {
    const history = await getHistory(countryCode);

    return {
        sources: [
            ['Johns Hopkins CSSE', 'https://covid19api.com/'],
        ],
        data: history?.map(log => ({
            active: log.Active,
            confirmed: log.Confirmed,
            date: log.Date,
            deaths: log.Deaths,
            recovered: log.Recovered,
        }))
    }
};

const GetPreventiveMeasures = async () => {
    return {
        sources: [
            ['World Health Organization', 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public'],
        ],
        data: [
            {
                title: 'Wash your hands frequently',
                content: 'Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.',
            },
            {
                title: 'Maintain social distance',
                content: 'Maintain at least 1 metre (3 feet) distance between yourself and others.',
            },
            {
                title: 'Stay clear of crowds',
                content: 'Avoid going to crowded places.',
            },
            {
                title: 'Avoid touching your face',
                content: 'Avoid touching eyes, nose and mouth.',
            },
            {
                title: 'Practice respiratory hygiene',
                content: 'Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately and wash your hands.',
            },
            {
                title: 'Behave consciously',
                content: 'Stay home and self-isolate even with minor symptoms such as cough, headache, mild fever, until you recover. Have someone bring you supplies. If you need to leave your house, wear a mask to avoid infecting others.',
            },
            {
                title: 'Seek medical care',
                content: 'If you have a fever, cough and difficulty breathing, seek medical attention, but call by telephone in advance if possible and follow the directions of your local health authority.',
            },
            {
                title: 'Stay updated',
                content: 'Keep up to date on the latest information from trusted sources, such as WHO or your local and national health authorities.',
            },
        ]
    }
};

let countries = null;
let summary = null;

export { GetCountries, GetDataByCountry, GetHistoryByCountry, GetPreventiveMeasures };