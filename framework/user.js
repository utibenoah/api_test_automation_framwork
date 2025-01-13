import {APIClient}  from "./api_client.js"
import {ContractValidator} from "./contract.js"
import { assert_status_code, assert_json_key, assert_json_value } from "./assertions.js"

let client=new APIClient('https://jsonplaceholder.typicode.com')



let schema={
    "type":"object",
    "properties":{
        
            "postId": {"type":"string"},
            "id": {"type":"integer"},
            "name": {"type": "string"},
            "email":{"type": "string"},
            "body": {"type": "string"},
          
    },

    "required":["postId","id","name","email","body"]
}

client.get('/comments', {'postId':1, 'email':'Eliseo@gardner.biz'})
                    .then(res=>{

                        
                    
                assert_status_code(res.status,200)
                assert_json_key(res.data[0], 'email')
                assert_json_value(res.data[0],'email','Eliseo@gardner.biz')
                    
    let schemaValidation =new ContractValidator(schema)

    schemaValidation.validate_schema(res.data[0])
    
})

