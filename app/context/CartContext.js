
'use client'
import React, { createContext, useContext, useReducer } from 'react';

export const CartContext = createContext();
export const CartDispathContext = createContext();

export function CartProvider({ children }) {
    const [cart, dispatch] = useReducer(cartReducer, { cart: [] , order: '', user: ''});
    return <CartContext.Provider value={cart}>
        <CartDispathContext.Provider value={dispatch}>
            {children}
        </CartDispathContext.Provider>
    </CartContext.Provider>
}

export function useCart() {
    return useContext(CartContext);
}

export function useCartDispatch() {
    return useContext(CartDispathContext);
}

export const actions = {
    addtocart:'ADD_TO_CART',
    removefromcart:'REMOVE_FROM_CART',
    decreaseamount:'DECREASE_AMOUNT',
    clearcart:'CLEAR_CART',
    updateOrder:'UPDATE_ORDER'

}
function cartReducer(state, action) {
    switch (action.type) {
        case actions.addtocart:
            const newCartItem = state.cart.find(item => item.id === action.payload.id);
            console.log(newCartItem)
            if (newCartItem) {
                newCartItem.amount += action.payload.amount/2;
                return {
                    ...state,
                    cart: [...state.cart]
                }
            } else {
                return {
                    ...state,
                    cart: [...state.cart, action.payload]
                }
            }

        case actions.removefromcart:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        case actions.decreaseamount:
            const cartItem = state.cart.find(item => item.id === action.payload);
            console.log(cartItem)
            if (cartItem.amount === 1) {
                return {
                    ...state,
                    cart: state.cart.filter(item => item.id !== action.payload)
                }
            } else {
                cartItem.amount -= 0.5;
                return {
                    ...state,
                    cart: [...state.cart]
                }
            }
        case actions.clearcart:
            return {
                ...state,
                cart: []
            }
        case actions.updateOrder:
            return {
                ...state,
                cart: action.payload
            }

        default:
            return state;

    }
}