export const ADD_TO_CART=(book)=>{
    return {type:'ADD_TO_CART',payload:book}
}
export const REMOVE_FROM_CART=(id)=>{
    return {type:'REMOVE_FROM_CART',payload:id}
}