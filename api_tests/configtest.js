import {APIClient} from "../framework/api_client.js";
import {Config }from "../framework/config.js";


let api_client=(config=Config)=>{
    

    let client =new APIClient(config.base_url)
    return client
}

export {api_client}