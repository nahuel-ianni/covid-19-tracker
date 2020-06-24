import axios from 'axios';

const baseUrl = 'https://api.covid19api.com/';
const countries = 'countries';
const summary = 'summary';

export const getCountries = async () => {
    return [{ "Country": "Turkey", "Slug": "turkey", "ISO2": "TR" }, { "Country": "Canada", "Slug": "canada", "ISO2": "CA" }, { "Country": "Czech Republic", "Slug": "czech-republic", "ISO2": "CZ" }];

    const res = await fetchData(`${baseUrl}${countries}`);
    // console.log(res);
    return res;
}

export const getSummary = async (countryName) => {
    const data = { "Global": { "NewConfirmed": 139412, "TotalConfirmed": 8590132, "NewDeaths": 5071, "TotalDeaths": 462325, "NewRecovered": 81144, "TotalRecovered": 4154448 }, "Countries": [{ "Country": "Afghanistan", "CountryCode": "AF", "Slug": "afghanistan", "NewConfirmed": 658, "TotalConfirmed": 27532, "NewDeaths": 42, "TotalDeaths": 546, "NewRecovered": 1502, "TotalRecovered": 7660, "Date": "2020-06-19T08:23:06Z" }], "Date": "2020-06-19T08:23:06Z" };
    return countryName 
        ? data?.Countries?.find(item => item.Country === countryName)
        : data?.Global;

    const res = await fetchData(`${baseUrl}${summary}`);
    // console.log(res);
    return res;
}

const fetchData = async (url) => {
    try {
        const response = await axios.get(url);
        return response.status === 200
            ? response.data
            : null;
    } catch (error) {
        console.log(error);
    }
}
