
// /donationrequest?id={id}
const makeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.setRequestHeader("Content-Type", "application/json");
    // xhr.addEventListener('load', () => {
    //   resolve(JSON.parse(xhr.responseText));
    // });
    xhr.onload = () => {
      resolve(JSON.parse(xhr.responseText));
    };
    xhr.onerror = () => {
      reject();
    }
    xhr.send();
  })
}
export default makeRequest;
