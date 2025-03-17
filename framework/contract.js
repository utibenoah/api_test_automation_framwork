import { validate } from "jsonschema"
import logger from "../utils/loggerUtils.cjs";

class ContractValidator{
    constructor(schema){
        this.schema=schema
    }

    validate_schema=(response_data)=>{
        if (!validate(response_data, this.schema).valid) {
            logger.error('Contract validation error')
            throw new Error("Contract validation error");
            
        }

        logger.info('Contract validation pass')

        return true
    }
    
}

export {ContractValidator}