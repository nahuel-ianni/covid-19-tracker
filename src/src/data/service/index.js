import { getCountries } from '../api';

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
    }

    return countries;
};

let countries = null;

export { GetCountries };