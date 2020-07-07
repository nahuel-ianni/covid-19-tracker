import axios from 'axios';

const covidBaseUrl = 'https://api.covid19api.com/';
const worldPopulationBaseUrl = 'https://restcountries.eu/rest/v2/alpha/';
const countries = 'countries';
const summary = 'summary';

export const getCountries = async () => {
    // return [{ "Country": "Turkey", "Slug": "turkey", "ISO2": "AF" }, { "Country": "Canada", "Slug": "canada", "ISO2": "CA" }, { "Country": "Czech Republic", "Slug": "czech-republic", "ISO2": "CZ" }];

    return await fetchData(`${covidBaseUrl}${countries}`);
}

export const getCountryPopulation = async (countryCode) => {
    // return { "name": "Czech Republic", "topLevelDomain": [".cz"], "alpha2Code": "CZ", "alpha3Code": "CZE", "callingCodes": ["420"], "capital": "Prague", "altSpellings": ["CZ", "Česká republika", "Česko"], "region": "Europe", "subregion": "Eastern Europe", "population": 10558524, "latlng": [49.75, 15.5], "demonym": "Czech", "area": 78865.0, "gini": 26.0, "timezones": ["UTC+01:00"], "borders": ["AUT", "DEU", "POL", "SVK"], "nativeName": "Česká republika", "numericCode": "203", "currencies": [{ "code": "CZK", "name": "Czech koruna", "symbol": "Kč" }], "languages": [{ "iso639_1": "cs", "iso639_2": "ces", "name": "Czech", "nativeName": "čeština" }, { "iso639_1": "sk", "iso639_2": "slk", "name": "Slovak", "nativeName": "slovenčina" }], "translations": { "de": "Tschechische Republik", "es": "República Checa", "fr": "République tchèque", "ja": "チェコ", "it": "Repubblica Ceca", "br": "República Tcheca", "pt": "República Checa", "nl": "Tsjechië", "hr": "Češka", "fa": "جمهوری چک" }, "flag": "https://restcountries.eu/data/cze.svg", "regionalBlocs": [{ "acronym": "EU", "name": "European Union", "otherAcronyms": [], "otherNames": [] }], "cioc": "CZE" };
    
    return await fetchData(`${worldPopulationBaseUrl}${countryCode}`);
};

export const getLastUpdateDateTime = async () => {
    // const data = { "Global": { "NewConfirmed": 139412, "TotalConfirmed": 8590132, "NewDeaths": 5071, "TotalDeaths": 462325, "NewRecovered": 81144, "TotalRecovered": 4154448 }, "Countries": [{ "Country": "Afghanistan", "CountryCode": "AF", "Slug": "afghanistan", "NewConfirmed": 658, "TotalConfirmed": 27532, "NewDeaths": 42, "TotalDeaths": 546, "NewRecovered": 1502, "TotalRecovered": 7660, "Date": "2020-06-19T08:23:06Z" }], "Date": "2020-06-19T08:23:06Z" };
    // return data?.Date;

    const data = await fetchData(`${covidBaseUrl}${summary}`);
    return data?.Date;
}

export const getSummary = async () => {
    // return { "Global": { "NewConfirmed": 139412, "TotalConfirmed": 8590132, "NewDeaths": 5071, "TotalDeaths": 462325, "NewRecovered": 81144, "TotalRecovered": 4154448 }, "Countries": [{ "Country": "Afghanistan", "CountryCode": "AF", "Slug": "afghanistan", "NewConfirmed": 658, "TotalConfirmed": 27532, "NewDeaths": 42, "TotalDeaths": 546, "NewRecovered": 1502, "TotalRecovered": 7660, "Date": "2020-06-19T08:23:06Z" }], "Date": "2020-06-19T08:23:06Z" };

    return await fetchData(`${covidBaseUrl}${summary}`);
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
