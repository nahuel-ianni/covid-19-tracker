import { getCountries, getSummary } from '../api';
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

    // if (countryCode && !countryPopulation.find(country => country.alpha2Code === countryCode))
    //     countryPopulation.push(await getCountryPopulation(countryCode));

    const data = countryCode
        ? summary?.Countries?.find(country => country.CountryCode === countryCode)
        : summary?.Global;

    // const population = countryCode
    //     ? countryPopulation?.find(country => country.alpha2Code === countryCode)?.population
    //     : null;

    return {
        lastUpdate: summary?.Date,
        data: [
            {
                title: 'Recovered',
                total: data?.TotalRecovered,
                // new: data?.NewRecovered,
                // extras: [
                //     `${data?.NewRecovered.toLocaleString()} new registered cases`,
                //     `${GetPercentage(data?.TotalRecovered, data?.TotalConfirmed)}% of all cases recovered`,
                //     countryCode ? `${GetPercentage(data?.TotalRecovered, summary?.Global.TotalRecovered)}% of the global cases are local` : null,
                //     population ? `${GetPercentage(data?.TotalRecovered, population)}% of the population got infected but recovered` : null,
                // ],
            },
            {
                title: 'Confirmed',
                total: data?.TotalConfirmed,
                // new: data?.NewConfirmed,
                // extras: [
                //     `${data?.NewConfirmed.toLocaleString()} new registered cases`,
                //     `${GetPercentage(data?.TotalConfirmed - (data?.TotalRecovered + data?.TotalDeaths), data?.TotalConfirmed)}% of all cases are still active`,
                //     countryCode ? `${GetPercentage(data?.TotalConfirmed, summary?.Global.TotalConfirmed)}% of the global cases are local` : null,
                //     population ? `${GetPercentage(data?.TotalConfirmed, population)}% of the population contracted the virus` : null,
                // ],
            },
            {
                title: 'Deaths',
                total: data?.TotalDeaths,
                // new: data?.NewDeaths,
                // extras: [
                //     `${data?.NewDeaths.toLocaleString()} new registered cases`,
                //     `${GetPercentage(data?.TotalDeaths, data?.TotalConfirmed)}% of all cases ended up in death`,
                //     countryCode ? `${GetPercentage(data?.TotalDeaths, summary?.Global.TotalDeaths)}% of the global cases are local` : null,
                //     population ? `${GetPercentage(data?.TotalDeaths, population)}% of the population died because of the virus` : null,
                // ],
            },
        ]
    }
};

let countries = null;
let summary = null;

export { GetCountries, GetDataByCountry };