import axios from 'axios';

const baseUrl = 'https://api.covid19api.com/';
const countries = 'countries';
const summary = 'summary';

export const getCountries = async () => {
    return [{ "Country": "Turkey", "Slug": "turkey", "ISO2": "AF" }, { "Country": "Canada", "Slug": "canada", "ISO2": "CA" }, { "Country": "Czech Republic", "Slug": "czech-republic", "ISO2": "CZ" }];

    return await fetchData(`${baseUrl}${countries}`);
}

export const getLastUpdateDateTime = async () => {
    const data = { "Global": { "NewConfirmed": 139412, "TotalConfirmed": 8590132, "NewDeaths": 5071, "TotalDeaths": 462325, "NewRecovered": 81144, "TotalRecovered": 4154448 }, "Countries": [{ "Country": "Afghanistan", "CountryCode": "AF", "Slug": "afghanistan", "NewConfirmed": 658, "TotalConfirmed": 27532, "NewDeaths": 42, "TotalDeaths": 546, "NewRecovered": 1502, "TotalRecovered": 7660, "Date": "2020-06-19T08:23:06Z" }], "Date": "2020-06-19T08:23:06Z" };
    return data?.Date;

    // const data = await fetchData(`${baseUrl}${summary}`);
    // return data?.Date;
}

export const getSummary = async () => {
    return { "Global": { "NewConfirmed": 139412, "TotalConfirmed": 8590132, "NewDeaths": 5071, "TotalDeaths": 462325, "NewRecovered": 81144, "TotalRecovered": 4154448 }, "Countries": [{ "Country": "Afghanistan", "CountryCode": "AF", "Slug": "afghanistan", "NewConfirmed": 658, "TotalConfirmed": 27532, "NewDeaths": 42, "TotalDeaths": 546, "NewRecovered": 1502, "TotalRecovered": 7660, "Date": "2020-06-19T08:23:06Z" }], "Date": "2020-06-19T08:23:06Z" };

    return await fetchData(`${baseUrl}${summary}`);
}

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
