const initialState = {
    items: [],
    total: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const newItem = action.payload;
            const newCart = [...state.items, { ...newItem }];
            const newTotal = newCart.reduce((acc, item) => acc + parseFloat(item.Prix), 0); // Assuming item.Prix is the price
            return {
                ...state,
                items: newCart,
                total: newTotal,
            };
        case 'REMOVE_FROM_CART':
            const filterItem= [...state.items.filter(p=>p.ISBN!==action.payload)];
            const decreaseTotal = filterItem.reduce((acc,item)=>acc+parseFloat(item.Prix),0);
            return {
                ...state,
                items:filterItem,
                total:decreaseTotal
            } ;
        default:
            return state;
    }
};

export default reducer;
