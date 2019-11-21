import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/search/photos',
    headers: {
        Authorization: 'Client-ID 4e389bcbab2af176892a698be3cb88765e41fef70b51d09b04e459ed194fb5c3'
    }
});