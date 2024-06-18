import { currencyFormatter } from "../utils/formatting"
import Button from "./ui/Button"

export default function MealItem({meal}){
    
    const {id, image, name, description, price}= meal
    
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
                           <Button>Add to Cart</Button> 
                        </p>
                        </article>
                    </li>
    )
}