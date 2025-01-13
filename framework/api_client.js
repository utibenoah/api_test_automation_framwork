import axios from 'axios'

class APIClient {
    constructor(base_Url, headers=null) {
        this.base_Url= base_Url
        this.headers=headers
    
    }
// get resource from endpoint
      get= async(endpoint,params=null)=>{
        let url=`${this.base_Url}${endpoint}`
        let response=await axios.get(url,{params:params},{headers:this.headers})

        
        return response
         
    }


    post= async(endpoint,payload)=>{
        let url=`${this.base_Url}${endpoint}`
        let response= await axios.post(url,payload,{headers:this.headers})

        return response
         
    }
}


export {APIClient}