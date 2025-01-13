import { ContractValidator } from "../framework/contract.js";
                        
import { api_client } from "./configtest.js";
import { assert_json_key, assert_json_value, assert_status_code } from "../framework/assertions.js";

describe('test_comment', ()=>{

    // get all comment
    
    it('get all comment', async() => {
        let response=await api_client().get('/comments')
        assert_status_code(response.status,200)//asserting response
    });
         
     
    // get specific comment

    it('get specific comment', async() => {
        let response=await api_client().get('/comments',{'postId':1, 'email':'Eliseo@gardner.biz'})

        assert_status_code(response.status,200)//assert response code
        assert_json_key(response.data[0], 'email')// assert key
        assert_json_value(response.data[0],'email','Eliseo@gardner.biz')//assert key value
        

        //contract testing

        let schema={
            "type":"object",
            "properties":{
                
                    "postId": {"type":"integer"},
                    "id": {"type":"integer"},
                    "name": {"type": "string"},
                    "email":{"type": "string"},
                    "body": {"type": "string"},
                  
            },
        
            "required":["postId","id","name","email","body"]
        }



        let schemaValidation =new ContractValidator(schema)

        schemaValidation.validate_schema(response.data[0])
    });
   

})

