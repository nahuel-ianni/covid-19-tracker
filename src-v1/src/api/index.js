import axios from 'axios';

const baseUrl = 'https://api.covid19api.com/';
// const country = 'countries';
const summary = 'summary';

// export const getCountriesAPI = async () => {
//     const res = await getData(`${baseUrl}${country}`);

//     console.log(res);
// }

export const getSummaryAPI = async () => {
    const res = await getData(`${baseUrl}${summary}`);

    // console.log(res);
    return res;
}

const getData = async (url) => {
    try {
        // const response = await axios.get(url);
        // return response.status === 200
        //     ? response.data
        //     : null;

        return { "Global": { "NewConfirmed": 139412, "TotalConfirmed": 8590132, "NewDeaths": 5071, "TotalDeaths": 462325, "NewRecovered": 81144, "TotalRecovered": 4154448 }, "Countries": [{ "Country": "Afghanistan", "CountryCode": "AF", "Slug": "afghanistan", "NewConfirmed": 658, "TotalConfirmed": 27532, "NewDeaths": 42, "TotalDeaths": 546, "NewRecovered": 1502, "TotalRecovered": 7660, "Date": "2020-06-19T08:23:06Z" }], "Date": "2020-06-19T08:23:06Z" };
    } catch (error) {
        console.log(error);
    }
}
