import {useContext} from "react"
import { currencyFormatter } from "../utils/formatting"
import Button from "./ui/Button"
import CartContext from "../store/CartContext"

export default function MealItem({meal}){
    const ctX= useContext(CartContext)
    
     const {id, image, name, description, price}= meal
    function handleAddMealToCart(){
        ctX.addItem(meal)
    }
    return(
        <li className="meal-item">
            <article>
                <img src={`http://localhost:3000/${image}`}/>
                        <div>
                            <h3>{name}</h3>
                            <p className="meal-item-description">{description}</p>
                            <p className="meal-item-price">{currencyFormatter.format( price)}</p>
                        </div>
                        <p className="meal-item-actions">
                           <Button onClick={handleAddMealToCart}>Add to Cart</Button> 
                        </p>
                        </article>
                    </li>
    )
}