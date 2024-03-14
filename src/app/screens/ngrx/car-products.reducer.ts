import {Product} from '../../shared/models/products.model'

export function addProducts(state:Product[]=[],action){
    switch(action.type){
        case 'ADD_PRODUCT':
            return [...state,action.payload]
            default:
                return state;
    }
}