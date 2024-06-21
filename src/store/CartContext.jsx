import { createContext, useReducer } from "react";

const CartContext =createContext({
    items: [],
    addItems: (item)=>{},
    removeItems:(id)=>{},
    updateItem:(id)=>{}
})

function cartReducer(state, action){
   if(action.type=== 'ADD_ITEMS'){
     const existingCartItemIndex =  state.items.findIndex((item)=>item.id===action.item.id)
     const updateItems = [...state.items];
     const existingItems = state.items[existingCartItemIndex]
     if(existingCartItemIndex  >-1){
       const updatedItem ={
        ...existingItems,
        quantity: existingItems.quantity+1
       }
       updateItems[existingCartItemIndex] = updatedItem
     }else{
        updateItems.push({...action.item, quantity: 1})
     }
    }
   if (action.type==='REMOVE_ITEMS'){
    //remove items
   }

   return state
}

export function CartContextProvider({children}){
    return <CartContextProvider>{children}</CartContextProvider>
}

export default CartContext;
