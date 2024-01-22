import axios from "axios";
import { PRODUCT_LIST_FAILURE, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../contants/productConstants";

export const listProducts=()=>async (dispatch)=>{
    try{
        dispatch({type:PRODUCT_LIST_REQUEST})
        const { data } = await axios.get("api/");
        
        dispatch({type:PRODUCT_LIST_SUCCESS,payload:data})

    }catch(err){
        dispatch({type:PRODUCT_LIST_FAILURE,payload:err.response && err.response.data.detail})

        console.log(err)
    }
}