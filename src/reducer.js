
export const initialState = {
    basket: [{
        id: 1,
        title: 'Lazy Gardener Plantable Cracker Box (Only Crackers) Set of 1 Diwali Themed Seed Bombs Go Green This Diwali || Grow Your Crackers Seed Bombs',
        price: 649,
        rating: 2,
        image: 'https://m.media-amazon.com/images/I/71zTypEjiAL._SY355_.jpg'
    }],
    user: null,
};

export const getBasketTotal = (basket) => 
basket?.reduce((amout,item) => item.price + amout, 0);

const reducer = (state, action) => {

    switch (action.type) {
        case "SET_USER":
            return{
                ...state,
                user:action.user,
            }
        case 'ADD_TO_BASKET':
            return { ...state, basket: [...state.basket, action.item] };
        case 'REMOVE_FROM_BASKET':

            let newBasket = [...state.basket];
            const i = state.basket.findIndex((item) => item.id === action.id);
            if (i >= 0) {
                newBasket.splice(i, 1);
            }
            else {
                console.warn(`
                Can't remove product (id: ${action.id}) as it does not exisits in cart. `)
            }
            return {
                ...state,
                basket: newBasket,
            };
        default:
            return state;
    }
}
export default reducer;