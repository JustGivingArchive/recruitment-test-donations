const charityRequest = (charityId, callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("load", () => {
    callback(null, JSON.parse(request.responseText));
  })
  request.open("GET",
    `/charityrequest?id=${charityId}`);
  request.setRequestHeader("Content-Type", "application/json");
  request.send();
}

export default charityRequest;
