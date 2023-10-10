import axios from "axios";
let baseUrl = process.env.REACT_APP_NODE_URL
function getHeaders() {
    const token = localStorage.getItem('token');
    const headers = {
      "Content-Type": "application/json",
    };
    
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    
    return headers;
  }
  
async function apiHelper(apiType, path, data, headers) {
    if (baseUrl === undefined || !baseUrl) {
        baseUrl = ""
    }
    if (apiType === "post" || apiType === "put" || apiType === "get" || apiType === "delete") {
        try {
            let response = await axios({
                method: apiType,
                url: `${baseUrl + path}`,
                data,
                headers: getHeaders(),
            })
            return response;
        } catch (error) {
            return error.response;
        }
    }
}




export { apiHelper };
