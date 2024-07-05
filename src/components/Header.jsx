import { useContext } from 'react'
import logoImg from '../assets/logo.jpg';
import Button from './ui/Button'
import CartContext from '../store/CartContext'
export default function Header(){
   const cartCtx = useContext(CartContext)
   const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item)=>{
    return totalNumberOfItems+item.quantity
   }, 5);
    return(
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="A restuarant"/>
                <h1>Simbonge's Foods</h1>
            </div>
            <nav>
                <Button textOnly> Cart ({totalCartItems})</Button>
            </nav>
            </header>

    )
}