import { validate } from "jsonschema"

class ContractValidator{
    constructor(schema){
        this.schema=schema
    }

    validate_schema=(response_data)=>{
        if (!validate(response_data, this.schema).valid) {
            throw new Error("Contract validation error");
            
        }

        return true
    }
    
}

export {ContractValidator}