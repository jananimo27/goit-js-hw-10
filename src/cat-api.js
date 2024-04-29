import axios from 'axios';

const BASE_URL = "https://api.thecatapi.com/v1";
const API_KEY = 'live_3FXnxqRh2mMSHBOfDesNm0d3y01QZSAzr196S2e0aU7e4WNrNv8uXGDssLjJfKuy';


axios.defaults.headers.common['x-api-key'] = API_KEY;

export function fetchBreeds(){
    return axios.get(`${BASE_URL}/breeds`)
        .then(response => response.data)
        .catch(error => {
            throw new Error(`Error: ${error.response.status}`);
        });
}

export function fetchCatByBreed(breedId) {
    console.log("cat-api.js", breedId);  
    return axios.get(`${BASE_URL}/images/search`, {
        params: { breed_ids: breedId }
    })
    .then(response => {
        if (response.data.length === 0) {
            throw new Error('No data returned for this breed.');
        }
        return response.data;
    })
    .catch(error => {
        throw new Error(`Error: ${error.response.status}`);
    });
}
