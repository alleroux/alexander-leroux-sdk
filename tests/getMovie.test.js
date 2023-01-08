import axios from "axios";
import TheOneAPISDK from "../src/theOneAPI";

const sampleMovieName = 'The Battle of the Five Armies';

jest.mock("axios", () => jest.fn());

let theOneAPI;
let result;

describe('Test the getMovie API Call', () => {

    theOneAPI = new TheOneAPISDK();
    result = {};

    test('Get the movie by id', async () => {
        const mockData = {
          status: 200,
          data: {
              docs: [
                  {
                      name: sampleMovieName
                  }
              ]
          }
        };
        axios.mockResolvedValueOnce(mockData);
        const result = await theOneAPI.getMovie("5cd95395de30eff6ebccde5a");
        expect(result.docs[0].name).toEqual(sampleMovieName);
    })

});
