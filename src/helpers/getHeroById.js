import axios from "axios"

const URL = "https://superheroapi.com/api.php/";
const token = "10222975487554224";

export const getHeroById = async heroId => {
    const hero = await axios.get(`${URL}${token}/${heroId}`);
    return hero;
}