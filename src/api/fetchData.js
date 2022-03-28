// import axios from 'axios';

// // API_KEY: a177f8481c31fa96c3f95ad4f4f84610
// // Request URL: https://api.darksky.net/forecast/[API_KEY]/[latitude], [longitude]
// // Request URL: https://api.darksky.net/forecast/[API_KEY]/${lat},${lon}

// export const baseUrl = 'https://api.darksky.net/forecast/';

// export const fetchData = async (baseUrl) => {
//   const { data } = await axios.get((baseUrl), {
//     params: {units: 'auto', lang: 'en'},
//     headers: {
//         'X-RapidAPI-Host': 'dark-sky.p.rapidapi.com',
//         'X-RapidAPI-Key': 'a177f8481c31fa96c3f95ad4f4f84610'
//       }
//   });
    
//   return data;
// }