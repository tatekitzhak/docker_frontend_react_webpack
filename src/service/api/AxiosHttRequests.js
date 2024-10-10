import axios from 'axios'

const handleRequest = (request, thunkApi) =>
    request
        .then(response => response.data)
        .catch(error => thunkApi.rejectWithValue(error ?.response ?.data || error))

const buildUrl = (url, params) => {
    // Support URLs with named identifiers, such as '/posts/get/:id'.
    // This code replaces the ':id' part with the value of params.id
    Object.keys(params).forEach(k => {
        if (url.indexOf(':' + k) > -1) {
            url = url.replace(':' + k, params[k])
            delete params[k]
        }
    })

    // all the parameters that were not bound to a named identifier are appended to the URL
    const encoded = Object.entries(params).map(kv => kv.map(encodeURIComponent).join("=")).join("&")
    return url + (encoded.length > 0 ? '?' + encoded : '')
}

export default class AxiosHttRequests {
    constructor(method, url, queryString) {
        this.publicVariable = "public value"; // Public property
        this.config = {
            method: 'GET',
            url: BASE_API_URI,
            params: {
                postId: thunkAPI.requestId,
                _limit: 3,
                title: 'category_name',
                category_id: id_params[0].category_id,
                title: 'subcategory_name',
                subcategory_id: id_params[0].subcategory_id
            },
            headers: {
                Authorization: 'Bearer my fetchTopicsById',
                'Content-Type': 'application/json',
                'Accept-Language': '*',
                'My-Custom-Header': 'fetchTopicsById'
            }
        };
        this.privilegedMethod = function () {
            console.log("Inside Instance Method");
            console.log("Instance var - " + this.publicVariable);
            console.log("Static var - " + MyClass.staticProperty);
        };
    }
    // Static properties shared by all instances
    static staticProperty = "static value";
    static staticMethod = () => {
        console.log("Inside Static Method");
        console.log("Cannot access Instance var - " + this.publicVariable);
        console.log("Static var - " + MyClass.staticProperty);
    }
    static post = (url, axiosConfig = {}) => (obj = {}, thunkApi) =>
        handleRequest(axios.post(url, obj, axiosConfig), thunkApi);

    static get = (url, axiosConfig = {}) => (obj = {}, thunkApi) =>
        handleRequest(axios.get(buildUrl(url, obj), axiosConfig), thunkApi);

    static get2 = (url, axiosConfig = {}) => {
        return async (obj = {}, thunkApi) => {
            return handleRequest(await axios.get(buildUrl(url, obj), axiosConfig), thunkApi)
        }
    };

    static delete = (url, axiosConfig = {}) => (obj = {}, thunkApi) =>
        handleRequest(axios.delete(buildUrl(url, obj), axiosConfig), thunkApi)
}