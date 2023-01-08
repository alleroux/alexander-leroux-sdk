import Secrets from '../secret.json';
import axios from "axios";

class SimpleAPICall {
    /**
     * Create a SimpleAPICall.
     * @param {string} accessToken - Access token for the one API can be retrieved by creating an account for The One API
     */
    constructor(accessToken) {
        this.baseURL = "https://the-one-api.dev/v2/";
        this.accessToken = accessToken;
    }

    /**
     * Fetch the information from the API.
     * @param {string} route - The route where you are fetching data from. ie. "book"
     * @return {Promise} - Returns a Promise that, when fulfilled, will either return a JSON Object with the requested
     * data or an Error with the problem.
     */
    async send(route) {

        if (!this.accessToken) {
            throw new Error("No access token found");
        }

        //need to authenticate with the one server for most routes
        const headers = {
            'Authorization': 'Bearer ' + this.accessToken
        };

        const url = this.baseURL + route;
        const method = 'get';

        const response = await axios({
            url,
            method,
            headers
        });

        if (response.status >= 400) {
            // check for 4XX, 5XX, wtv
            throw new Error(response.data);
        }
        if (response.status >= 200 && response.status <= 202) {
            return response.data;
        }
        return {};
    }
}

class TheOneAPISDK {

    /**
     * Create a TheOneAPISDK for making API calls.
     */
    constructor() {
        this.api = new SimpleAPICall(Secrets.accessKey);
    }

    /**
     * Fetch a single movie from the API
     * @param {string} movieId - The ID value of the movie being retrieved from the API
     * @return {Promise} - Returns a Promise that, when fulfilled, will either return a JSON Object with the requested
     * data or an Error with the problem.
     */
    getMovie(movieId) {
        const route = `movie/${movieId}`;
        return this.api.send(route);
    }

    /**
     * Fetch a single movie from the API
     * @return {Promise} - Returns a Promise that, when fulfilled, will either return a JSON Object with the requested
     * data or an Error with the problem.
     */
    getMovies() {
        const route = `movie`;
        return this.api.send(route);
    }
}

export default TheOneAPISDK;
