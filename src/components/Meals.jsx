import React, {useState, useEffect} from "react"
export default function Meals(){
    const [loadedMeals, setLoadedMeans]= useState([])

    useEffect(()=>{
    async function fetchMeals(){
    const response = await fetch('http://localhost:3000/meals')
    
        if(!response.ok){
            // throw new Error('Something went wrong')
        }
      const responseMeals = await response.json()
      setLoadedMeans(responseMeals)
    }
    fetchMeals()
    },[])

    return(
        <section id="meals">
            <ul id="meals">
                {loadedMeals.map(meal=>(
                    <li key={meal.id}>
                        <div>
                            <h3>{meal.name}</h3>
                            <div>{meal.description}</div>
                            <div>{meal.price}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}