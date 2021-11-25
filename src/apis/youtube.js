import axios from 'axios';
const KEY = 'AIzaSyCFmfq-UOstTwl6WladkK73nwO_tMCu9ms';
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10000,
        key: KEY

    }
});
