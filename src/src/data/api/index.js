import axios from 'axios';

const countriesBaseUrl = 'https://restcountries.eu/rest/v2/';
const countriesAll = 'all';
const covidBaseUrl = 'https://api.covid19api.com/';
const covidSummary = 'summary';
const covidCountryHistory = 'dayone/country/';

const getSummary = async () => await fetchData(`${covidBaseUrl}${covidSummary}`);

const getCountries = async () => await fetchData(`${countriesBaseUrl}${countriesAll}`);

const getHistory = async (countryCode) => await fetchData(`${covidBaseUrl}${covidCountryHistory}${countryCode}`);

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

export { getCountries, getHistory, getSummary };