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

let countries = null;
let summary = null;

export { GetCountries, GetDataByCountry, GetHistoryByCountry };