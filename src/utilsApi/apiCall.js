import axios from "axios";



export default function callApi(endpoint, method = "GET", body) {
  return axios({
    method: method,
    url: `${"http://localhost:14403"}/${endpoint}`,
    data: body
  }).catch(err => {
    console.log(err);
  });
}
