import fetch from "node-fetch";

const jsonTypicode = "https://v2.jokeapi.dev/joke/Programming?type=single";

const fetchData = async (apiEndPoint) => {
  try {
    const response = await fetch(apiEndPoint, {method: 'GET'});
    const json = await response.json();
    console.log(json.joke);
  } catch (error) {
    console.log(error);
  }
};

fetchData(jsonTypicode);
