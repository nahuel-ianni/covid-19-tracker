import { getCountries } from '../api';
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

let countries = null;

export { GetCountries };