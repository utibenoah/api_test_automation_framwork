import { config } from "dotenv"

//config()

//require("dotenv").config()

let Config={
    base_url:process.env.BASE_URL,
    api_key:process.env.API_KEY,
    timeout:parseInt(process.env.TIMEOUT)||30,
    retry:parseInt(process.env.RETRY)||3,
    token:process.env.TOKEN

}



export {Config}