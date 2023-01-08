import TheOneAPISDK from "alexander-leroux-sdk";

const theOneAPI = new TheOneAPISDK();

theOneAPI.getMovies()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });
