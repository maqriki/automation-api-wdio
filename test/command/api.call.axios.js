const axios = require('axios');

class AxiosCall{
    post = async ({
        baseURL = 'https://petstore.swagger.io/v2/',
        path = '',
        data = {},
        headers = {
            'Content-Type' : 'application/json'
        }
    }) => {
        const response = axios.post(
                baseURL + path,
                data,
                headers
            ).then(function (response) {
                return response;
            }).catch(function (err) {
                return err.response;
            });
        
        return response;
    }

    
    get = async ({
        baseURL = 'https://petstore.swagger.io/v2/',
        path = '',
        data = {},
        headers = {
            'Content-Type' : 'application/json'
        }
    }) => {
        const response = axios.get(
                baseURL + path,
                data,
                headers
            ).then(function (response) {
                return response;
            }).catch(function (err) {
                return err.response;
            });
        
        return response;
    }
    
    put = async ({
        baseURL = 'https://petstore.swagger.io/v2/',
        path = '',
        data = {},
        headers = {
            'accept' : 'application/json',
            'Content-Type' : 'application/json',
        }
    }) => {
        const response = axios.put(
                baseURL + path,
                data,
                headers
            ).then(function (response) {
                return response;
            }).catch(function (err) {
                return err.response;
            });
        
        return response;
    }
}

module.exports = new AxiosCall();