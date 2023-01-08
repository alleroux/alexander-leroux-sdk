# The One API SDK
This is a JavaScript SDK for the purpose of gaining access to The One API located at https://the-one-api.dev/.
The SDK uses Axios to make requests to the API and returns the result of the request as an object.  You should use async/await syntax to capture the value of the response.

## Requirements

To use this SDK you will need Node.js (https://nodejs.org/)

## Installation

`npm install alexander-leroux-sdk`

`import TheOneAPISDK from "alexander-leroux-sdk";`

In order to connect to the API you will need to create a file in the router directory of your project called secret.json.  You can copy secret.example.json from the repository and overwrite the accessToken property with your own access token.  Register an account at https://the-one-api.dev in order to create an access token.

## Usage

See sample code in samples directory.

```
const theOneAPI = new TheOneAPISDK();

theOneAPI.getMovie("theMovieId")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```

## Available methods
- `getMovie(movieId)`

## API Documentation

API Documentation created via JSDoc is available in the `out` directory.
