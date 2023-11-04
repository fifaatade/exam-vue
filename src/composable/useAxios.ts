import axios from "axios";

export const clientHttp = axios.create (
    {
        baseURL: 'http://localhost:3007/', 
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json",
          Authorization: 'Bearer 1234567890'

        }
      }
  )
export const useAxios = ()=>{
    const get =(url)=> {
        return  clientHttp.get(url);
    }
    const post =(url,data)=> {
        return  clientHttp.post(url,data);
    }
    return {
        get,post
    }
}

