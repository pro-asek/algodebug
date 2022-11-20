import axios from 'axios';

export function sendRequest(url, data={}, method) {
  if (!validateMethod(method)) return;

  method = method.toLowerCase();
  url = getBackendUrl() + url;
  console.log(method, url)
  return axios[method](url, data)
    .then(response => {
      console.log(response);
      return response.data
    });
}

function getBackendUrl() {
  return window.location.origin.includes("localhost") ? "http://localhost:8080" : "https://algodebug.herokuapp.com"
}

function validateMethod(method) {
  return method && ['get', 'post', 'put'].includes(method.toLowerCase());
}