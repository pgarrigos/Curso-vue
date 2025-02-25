import axios from "axios";
import { GIFResponse } from "../interfaces/gif.response";

const apiKey = 'y5m6nUZuKP57W7eIabEOxi39EwUvl37Z';

export const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        apiKey: apiKey,
    }
});

// export default giphyApi;


// giphyApi.get<GIFResponse>('/random')
//     .then(resp => console.log(resp.data.data.images.downsized_large.url))
//     .catch(err => console.log(err));