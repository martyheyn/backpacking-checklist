// Open Weather API
import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '538db95f2882a4122769613606a1e87e';

export const fetchWeather = async (location) => {
    const { data } = await axios.get(URL, {
        params: {
            q: location,
            units: 'imperial',
            APPID: API_KEY,
        }
    });

    return data;
}