import TheOneAPISDK from "alexander-leroux-sdk";

const theOneAPI = new TheOneAPISDK();

theOneAPI.getMovie("theMovieId")
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });
