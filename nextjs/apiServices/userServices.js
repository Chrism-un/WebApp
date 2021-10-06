import axios from 'axios'
//const URL_USER = "https://localhost:8080";
const URL_USER = "https://localhost/api_user";
//const URL_USER = "https://localhost:8080";
//const URL_EVENT = "https://localhost:8088";
const HEADERS = {
                'Content-Type':'application/json',
                "Access-Control-Allow-Origin": [URL,"https://localhost/api_user"],
                "Access-Control-Allow-Headers": "accept, origin, x-requested-with, content-type",
                "Access-Control-Allow-Methods": "DELETE",
                "Access-Control-Allow-Methods": "OPTIONS",
                "Access-Control-Allow-Methods": "PUT",
                "Access-Control-Allow-Methods": "GET",
                "Access-Control-Allow-Methods": "POST"
            }

export const login = async (email, password ) => {
   const obj = {
            method:'POST',
            headers:HEADERS,
            mode:'cors',
            
        }
        const response = await axios.post(URL_USER+'/users/login',{email:email,password:password}, obj);
        return response;
}
export const createUser = async (user ) => {
   const obj = {
            method:'POST',
            headers:HEADERS,
            mode:'cors',
            
        }
        const response = await axios.post(URL+'/users/create',{user:user}, obj);
        return response;
}

export const callMethods = async (param) => {
    const obj = {
            method:'POST',
            headers:HEADERS,
            mode:'cors',
        
        }
        const response = axios.post(URL_USER+'/airNextTokenList/methods', {funct:param.name,inputs:param.inputs,stateMutability:param.stateMutability,sender:sender},obj)
        return response;
}

export const fetchPendingTransaction = async () => {
    const obj = {
            method:'GET',
            headers:HEADERS,
            mode:'cors',
        
        }
        const response = axios.get(URL_USER+'/airNextTokenList/pendingValidation',obj)
        return response;
}