const env = require("env2")('../../config.env');

const makeRequest = (charityId) => {
  const reqListener = () => {
    console.log(JSON.parse(this.responseText));
  }
  const request = new XMLHttpRequest();
  request.addEventListener("load", reqListener)
  request.open("GET",
    `https://api.justgiving.com/${process.env.API_ID}/v1/charity/${charityId}/`);
  request.setRequestHeader("Content-Type", "application/json");
  request.send();
}

export default makeRequest;
