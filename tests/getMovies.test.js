import axios from "axios";
import TheOneAPISDK from "../src/theOneAPI";

jest.mock("axios", () => jest.fn());

const sampleMovieName = 'The Battle of the Five Armies';
let theOneAPI;
let result;

describe('Test the getMovies API Call', () => {

    theOneAPI =  new TheOneAPISDK();
    result = {};

    test('Get a list of all movies', async () => {
        const mockData = {
            status: 200,
            data: {
                docs: [
                    {
                        name: sampleMovieName
                    }
                ],
                total:1
            }
        };
        axios.mockResolvedValueOnce(mockData);
        const result = await theOneAPI.getMovies();
        expect(result.docs.length).toBe(result.total);
    })

});
