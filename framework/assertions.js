import { expect } from "chai";

export const assert_status_code=(response_code, expected_code)=>{
    //assert response status code from api
    expect(response_code).to.be.equal(expected_code)
}


export const assert_json_key=(response_data, key)=>{
    //assert json key from api
    expect(response_data).to.have.property(key)
}

export const assert_json_value=(response_data, key,value)=>{
    //assert json value  from api
    expect(response_data).to.have.property(key,value)
}



