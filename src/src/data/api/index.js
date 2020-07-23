import axios from 'axios';

const covidBaseUrl = 'https://api.covid19api.com/';
const worldPopulationBaseUrl = 'https://restcountries.eu/rest/v2/alpha/';
const countries = 'countries';
const summary = 'summary';

const getCountries = async () => await fetchData(`${covidBaseUrl}${countries}`);

const getCountryPopulation = async (countryCode) => await fetchData(`${worldPopulationBaseUrl}${countryCode}`);

const getLastUpdateDateTime = async () => {
    const data = await fetchData(`${covidBaseUrl}${summary}`);
    return data?.Date;
}

const getSummary = async () => await fetchData(`${covidBaseUrl}${summary}`);

const fetchData = async (url) => {
    console.log(`Fetching data from ${url}`);

    try {
        const response = await axios.get(url);
        return response.status === 200
            ? response.data
            : null;
    } catch (error) {
        console.log(error);
    }
}

export { getCountries, getCountryPopulation, getLastUpdateDateTime, getSummary };