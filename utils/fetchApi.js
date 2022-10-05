import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {

        headers: {
            'X-RapidAPI-Key': '8a0b4086e0msh2a60d0bbbe10771p169e6fjsnec99add633c1',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })

    return data;
}