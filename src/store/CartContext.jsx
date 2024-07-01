import { createContext, useReducer } from "react";

const CartContext =createContext({
    items: [],
    addItem: (item) => {},
    removeItem:(id) => {},
})

function cartReducer(state, action){
   if(action.type=== 'ADD_ITEMS'){
     const existingCartItemIndex =  state.items.findIndex((item)=>item.id===action.item.id)
     const updatedItems = [...state.items];
     const existingItems = state.items[existingCartItemIndex]
     if(existingCartItemIndex  >-1){
       const updatedItem ={
        ...existingItems,
        quantity: existingItems.quantity+1
       }
       updatedItems[existingCartItemIndex] = updatedItem
     }else{
        updatedItems.push({...action.item, quantity: 1})
     }
     return {...state, items:updatedItems}
    }
   if (action.type==='REMOVE_ITEMS'){
    const existingCartItemIndex =  state.items.findIndex((item)=>item.id===action.id)
    const updatedItems = [...state.items];
    const existingCartItem = state.items[existingCartItemIndex]
    if(existingCartItem.quantity===1){
        updatedItems.splice(existingCartItemIndex, 1)
    }else{
        const  updatedItem  ={
            ...existingCartItem,
            quantity:existingCartItem.quantity-1
        }
        updatedItems[existingCartItemIndex] = updatedItem
    }
   }

   return state;
}
export function CartContextProvider({children}){
    const [cart, dispatchCartAction] = useReducer(cartReducer, {items:[]})
    
    function addItem (){
        dispatchCartAction({type:'ADD_ITEM', item:item})
    }
    function removeItem(id){
        dispatchCartAction({type:'REMOVE_ITEM', id})

    }
    const cartContext ={
        items: cart.items,
        addItem,
        removeItem
    }
    console.log('The cart context ', cartContext)
    return <CartContext.Provider value= {cartContext}>{children}</CartContext.Provider>
}

export default CartContext;
